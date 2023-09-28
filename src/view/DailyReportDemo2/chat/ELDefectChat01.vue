<script setup>

import {log} from "@antv/g2plot/lib/utils/index.js";

import getAlertList from '../../../store/getAlertList';

const getAlertListStore = getAlertList();


let currentDay;
let tomorrowDay;
let stackedColumnPlot;

let firstNGRate = ref(0);
let secondNGRate = ref(0);
let thirdNGRate = ref(0);

let dataToShow = []
let firstelYieldRate;
let firstDefectAmount = 0
let secondDefectAmount = 0
let thirdDefectAmount = 0

function dailyTask() {
  // Your task logic goes here
  var currentTime = new Date();
  var nextDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

  currentDay = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + nextDate.getDate()
  console.log("EL  currentDay : " + currentDay)
  console.log("EL tomorrowDay : " + tomorrowDay)
}

//1,set定时任务，2，跑一下开机任务
function startDailyTask() {

  // Get the current time
  var currentTime = new Date();
  const time1 = new Date(); // Replace with your desired time
  time1.setHours(0);       // Set the hours
  time1.setMinutes(0);    // Set the minutes
  const time2 = new Date(); // Replace with your desired time
  time2.setHours(6);      // Set the hours
  time2.setMinutes(45);     // Set the minutes
  if (currentTime <= time2 && currentTime >= time1) {
    currentTime = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);
  }
  var nextDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  currentDay = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + (nextDate.getDate())
  axiosCall();

  // Calculate the time until the next 6:46 am
  var targetTime = new Date();
  targetTime.setHours(6);
  targetTime.setMinutes(46);
  targetTime.setSeconds(0);

  // If the current time is already past 6:45 am, add 1 day to the target time
  if (currentTime > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  // Calculate the time difference in milliseconds
  var timeDifference = targetTime - currentTime;

  // Start the interval to run the task at the specified time
  setTimeout(function () {
    dailyTask(); // Run the task immediately
    setInterval(dailyTask, 24 * 60 * 60 * 1000); // Repeat the task every 24 hours
  }, timeDifference);
}

// Start the daily task
startDailyTask();

import axios from "axios";
import {Column} from '@antv/g2plot';
import {message} from "ant-design-vue";

self.setInterval(() => {
  axiosCall();
  // console.log("EL-defect timer")
}, 1000 * 60);


let dataFromBack = [];

function axiosCall() {
  // console.log("currentDay", currentDay)
  // console.log("tomorrowDay", tomorrowDay)
  axios({
    url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetDetailDataList",
    method: "GET",
    params: {
      StartTime: currentDay + " 6:45:00",
      EndTime: tomorrowDay + " 6:45:00",
      TimesFlag: 7,
      MaxResultCount: 1000,
      RouteOperations: "EL-1",
      SkipCount: 0
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    dataFromBack = [...response.data.result.items];
    // console.log("0 aixos");
    //todo 不会在两个promise写
    // if (response.data.result.totalCount > 600) {
    axios({
      url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetDetailDataList",
      method: "GET",
      params: {
        StartTime: currentDay + " 6:45:00",
        EndTime: tomorrowDay + " 6:45:00",
        TimesFlag: 7,
        MaxResultCount: 1000,
        RouteOperations: "EL-1",
        SkipCount: 1000
      },
      contentType: "json",
      processData: false,
      dataType: "json",
    }).then(function (response) {
      dataFromBack = [...dataFromBack, ...response.data.result.items];
      // console.log("1000 aixos");
      // console.log(dataFromBack)
      dataFromBack.map(item => {

      })
      // 分shift和原因
      const groupedData = dataFromBack.reduce((groups, item) => {
        const key = item.shiftValue + '-' + item.description;

        // Create a new group if it doesn't exist
        if (!groups[key]) {
          groups[key] = {shift: item.shiftValue, reason: item.description, count: 0, items: []};
        }

        // Increment the count and add the item to the group
        groups[key].count++;
        groups[key].items.push(item);

        return groups;
      }, {});
      // console.log(groupedData)
      //分shift
      const shiftGroupedData = dataFromBack.reduce((groups, item) => {
        const category = item.shiftValue;
        // Create a new group if it doesn't exist
        if (!groups[category]) {
          groups[category] = {category, count: 0, items: []};
        }
        // Increment the count and add the item to the group
        groups[category].count++;
        groups[category].items.push(item);
        return groups;
      }, {});
      // console.log(shiftGroupedData);

      if (shiftGroupedData.hasOwnProperty("Day")) {
        firstNGRate.value = ((1 - (groupedData["Day-A:正常"].count / shiftGroupedData["Day"].count)) * 100).toFixed(1) + '%';
        firstDefectAmount = (shiftGroupedData["Day"].count - groupedData["Day-A:正常"].count);
      }
      if (shiftGroupedData.hasOwnProperty("Night")) {
        secondNGRate.value = ((1 - (groupedData["Night-A:正常"].count / shiftGroupedData["Night"].count)) * 100).toFixed(1) + '%';
        secondDefectAmount = (shiftGroupedData["Night"].count - groupedData["Night-A:正常"].count);
      } else {
        //第二天归0
        secondNGRate.value = 0
      }
      if (shiftGroupedData.hasOwnProperty("NN")) {
        thirdNGRate.value = ((1 - (groupedData["NN-A:正常"].count / shiftGroupedData["NN"].count)) * 100).toFixed(1) + '%';
        thirdDefectAmount = (shiftGroupedData["NN"].count - groupedData["NN-A:正常"].count);
      } else {
        thirdNGRate.value = 0
      }

      //empty data and format, todo:安排顺序
      dataToShow = [
        {
          shift: 'Day', //第几个班： First, Second, Third
        },
        {
          shift: 'Night',
        },

        {
          shift: 'NN',
        }
      ]

      Object.entries(groupedData).forEach(([key, value]) => {
        // console.log(key + ': ' + value["shift"]);
        // console.log(key + ': ' + value["reason"]);
        // console.log(key + ': ' + value["count"]);
        // console.log(key)
        if ((key !== "Day-A:正常") && (key !== "Night-A:正常") && (key !== "NN-A:正常")) {

          dataToShow.push({
            shift: value["shift"], //第几个班： First, Second, Third
            reason: value["reason"],//不良原因
            amount: value["count"],  //这个原因的数量
          })
        }
      });
      // console.log(dataToShow)
      stackedColumnPlot.changeData(dataToShow)
      // alert("FirstEL NG Rate: Day shift too high");
      getAlertListStore.alertListPush("FirstEL NG Rate: Day shift too high")
    })
  })
};

function parseDate(today) {
  const parts = today.split('/');
  const year = parts[0];
  const month = parts[1].padStart(2, '0'); // Ensure two-digit month
  const day = parts[2].padStart(2, '0'); // Ensure two-digit day
  const formattedDate = year + month + day;
  return formattedDate;
}

function setDailyTimers(callback1, callback2, callback3) {
  // Calculate the target times for 6:44 AM, 3:14 PM, and 11:29 PM
  const targetTimes = [
    {hours: 15, minutes: 14},
    {hours: 23, minutes: 29},
    {hours: 6, minutes: 44},
  ];

  // Function to calculate the time until the next target time
  function timeUntilNextTarget(target) {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), target.hours, target.minutes);
    if (now > targetDate) {
      targetDate.setDate(targetDate.getDate() + 1); // Move to tomorrow
    }
    return targetDate - now;
  }

  // Function to execute the callback and reschedule the timer
  function scheduleCallback(callback, target) {
    callback();
    const delay = timeUntilNextTarget(target);
    setTimeout(() => scheduleCallback(callback, target), delay);
  }

  // Schedule the timers for each target time
  targetTimes.forEach((target, index) => {
    const callback = [callback1, callback2, callback3][index];
    const delay = timeUntilNextTarget(target);
    setTimeout(() => scheduleCallback(callback, target), delay);
  });
}

// Define the callback functions to be executed at 6:44 AM, 3:14 PM, and 11:29 PM
function timerCallback1() {
  console.log("Timer 1 triggered at 3:14 AM");
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: Number(parseDate(currentDay + "21")),
      firstel2Defect: firstDefectAmount,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
    } else {
    }
  })
}

function timerCallback2() {
  console.log("Timer 2 triggered at 11:29 PM");
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: Number(parseDate(currentDay + "22")),
      firstel2Defect: secondDefectAmount,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
    } else {
    }
  })
}

function timerCallback3() {
  console.log("Timer 3 triggered at 6:44 AM");
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: Number(parseDate(currentDay + "23")),
      firstel2Defect: thirdDefectAmount,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
    } else {
    }
  })
}

// Call setDailyTimers with the callback functions
setDailyTimers(timerCallback1, timerCallback2, timerCallback3);

const data = {
  id: "Stringer21", //String21, , Stringer22, Stringer23,
  defect: [
    {
      reason: 'Miss-welding',//不良原因
      shift: 'First', //第几个班： First, Second, Third
      amount: 27,  //这个原因的数量
      type: "A"// a侧b侧
    },
    {
      reason: 'Crack',
      shift: 'First',
      amount: 33,
      type: "A"// a侧b侧

    },
    {
      reason: 'others',
      shift: 'First',
      amount: 33,
      type: "A"// a侧b侧
    },
    {
      reason: 'Miss-welding',
      shift: 'Second',
      amount: 6,
      type: "A"// a侧b侧
    },
    {
      reason: 'Crack',
      shift: 'Second',
      amount: 6,
      type: "A"// a侧b侧
    },
    {
      reason: 'Excessive corrosion',
      shift: 'Second',
      amount: 1,
      type: "A"// a侧b侧
    },
    {
      reason: 'Miss-welding',
      shift: 'Third',
      amount: 47,
      type: "A"// a侧b侧
    },


    {
      reason: 'Crack',
      shift: 'Third',
      amount: 48,
      type: "A"// a侧b侧
    },
    {
      reason: 'Short',
      shift: 'Third',
      amount: 2,
      type: "A"// a侧b侧
    },

  ]
};

onMounted(() => {
  stackedColumnPlot = new Column('ELDefectChat01', {
    data: dataToShow,
    isGroup: true,
    xField: 'shift',
    yField: 'amount',
    seriesField: 'reason',
    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],
    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // 数据标签防遮挡
        {type: 'interval-hide-overlap'},
        // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },
  });
  stackedColumnPlot.render();
})


</script>

<template>
  <div>
    <div>First-EL NG Rate ： day=“{{ firstNGRate }}”，night=“{{ secondNGRate }}”， NN=“{{ thirdNGRate }}”</div>
    <div id="ELDefectChat01" :style="{height:'200px'}"/>
  </div>
</template>


<style scoped>

</style>