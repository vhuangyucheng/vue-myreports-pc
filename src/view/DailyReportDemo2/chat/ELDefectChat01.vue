<script setup>

import {log} from "@antv/g2plot/lib/utils/index.js";

let currentDay;
let tomorrowDay;
let stackedColumnPlot;

let firstNGRate = ref(0);
let secondNGRate = ref(0);
let thirdNGRate = ref(0);

let dataToShow = []


function dailyTask() {
  // Your task logic goes here
  var currentTime = new Date();
  var nextDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  currentDay = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + nextDate.getDate()

}

//1,set定时任务，2，跑一下开机任务
function startDailyTask() {

  // Get the current time
  var currentTime = new Date();
  var nextDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  currentDay = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + (nextDate.getDate())
  axiosCall();

  // Calculate the time until the next 6:46 am
  var targetTime = new Date();
  targetTime.setHours(6);
  targetTime.setMinutes(45);
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

self.setInterval(() => {
  axiosCall();
  console.log("EL-defect timer")
}, 1000 * 60);


let dataFromBack = [];

function axiosCall() {
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
        StartTime: "2023/7/7 8:00:00",
        EndTime: "2023/7/9 20:00:00",
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
      console.log(shiftGroupedData);

      if(shiftGroupedData.hasOwnProperty("Day")){
        firstNGRate.value = (1 - (groupedData["Day-A:正常"].count / shiftGroupedData["Day"].count)).toFixed(3);
      }
      if (shiftGroupedData.hasOwnProperty("Night")) {
        secondNGRate.value = (1 - (groupedData["Night-A:正常"].count / shiftGroupedData["Night"].count)).toFixed(3);
      }
      if (shiftGroupedData.hasOwnProperty("NN")) {
        thirdNGRate.value = (1 - (groupedData["NN-A:正常"].count / shiftGroupedData["NN"].count)).toFixed(3);
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

    })
  })
};


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
    <div>不良率： day=“{{ firstNGRate }}”，night=“{{ secondNGRate }}”， NN=“{{ thirdNGRate }}”</div>
    <div id="ELDefectChat01" :style="{height:'300px'}"/>
  </div>
</template>


<style scoped>

</style>