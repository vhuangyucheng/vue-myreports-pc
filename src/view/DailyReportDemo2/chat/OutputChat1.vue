<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';


let dataToShow = [];
let column;

const FIRST_AMOUNT = 800;
const SECOND_AMOUNT = 800;
const THIRD_AMOUNT = 300;

let dayFirstel = 0;
let daySecondel = 0;
let dayFraming = 0;
let dayLamination = 0;
let daySorting = 0;
let dayPack = 0;
let nightFirstel = 0;
let nightSecondel = 0;
let nightFraming = 0;
let nightLamination = 0;
let nightSorting = 0;
let nightPack = 0;
let nnFirstel = 0;
let nnSecondel = 0;
let nnFraming = 0;
let nnLamination = 0;
let nnSorting = 0;
let nnPack = 0;

self.setInterval(() => {
  axiosCall()
  // console.log("output timer")
}, 1000 * 60);

let currentDay;
let tomorrowDay;

import getDate from '../../../store/getDate';

const getDateStore = getDate();


function dailyTask() {
  // Your task logic goes here
  var currentTime = new Date();
  var nextDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

  currentDay = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + nextDate.getDate()
  getDateStore.setDate(currentDay, tomorrowDay);
  console.log("output currentDay : " + currentDay)
  console.log("output tomorrowDay : " + tomorrowDay)
}

//1,set定时任务，2，跑一下开机任务
function startDailyTask() {
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
  // console.log(currentDay)
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + (nextDate.getDate())
  getDateStore.setDate(currentDay, tomorrowDay);

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

function axiosCall() {
  // console.log("currentDay", currentDay)
  // console.log("tomorrowDay", tomorrowDay)
  let dataFromBack;
  let dataOutput = [];
  axios({
    url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetSummaryDataList",
    method: "GET",
    params: {
      StartTime: currentDay + " 6:45:00",
      EndTime: tomorrowDay + " 6:45:00",
      TimesFlag: 7,
      MaxResultCount: 1000,
      LineCodes: "SJC01-01"

    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    dataFromBack = response.data.result.items;
    console.log(dataFromBack)

    dataFromBack.forEach(item => {
          if (item.ShiftValue === 'Day') {
            dayFirstel = parseInt(item["EL-1"]);
            daySecondel = parseInt(item["EL-F"]);
            dayFraming = parseInt(item["Framing&JB"]);
            dayLamination = parseInt(item.Lamination)
            daySorting = parseInt(item.Sorting)
            dayPack = parseInt(item.Pack);
          } else if (item.ShiftValue === 'Night') {
            nightFirstel = parseInt(item["EL-1"]);
            nightSecondel = parseInt(item["EL-F"]);
            nightFraming = parseInt(item["Framing&JB"]);
            nightLamination = parseInt(item.Lamination)
            nightSorting = parseInt(item.Sorting)
            nightPack = parseInt(item.Pack);
          } else if (item.ShiftValue === 'NN') {
            nnFirstel = parseInt(item["EL-1"]);
            nnSecondel = parseInt(item["EL-F"]);
            nnFraming = parseInt(item["Framing&JB"]);
            nnLamination = parseInt(item.Lamination)
            nnSorting = parseInt(item.Sorting)
            nnPack= parseInt(item.Pack);
          }
          dataOutput = [...dataOutput,
            {
              shift: item.ShiftValue + (" : Layup, FirstEL, Framing, Sorting, Pack"),
              col_name: "layup",
              amount: parseInt(item.Layup),
              type: "productivity"
            },
            {
              shift: item.ShiftValue + (" : Layup, FirstEL, Framing, Sorting, Pack"),
              col_name: "EL-1",
              amount: parseInt(item["EL-1"]),
              type: "productivity"
            },
            {
              shift: item.ShiftValue + (" : Layup, FirstEL, Framing, Sorting, Pack"),
              col_name: "Framing&JB",
              amount: parseInt(item["Framing&JB"]),
              type: "productivity"
            },
            {
              shift: item.ShiftValue + (" : Layup, FirstEL, Framing, Sorting, Pack"),
              col_name: "Sorting",
              amount: parseInt(item.Sorting),
              type: "productivity"
            },
            {
              shift: item.ShiftValue + (" : Layup, FirstEL, Framing, Sorting, Pack"),
              col_name: "Pack",
              amount: parseInt(item.Pack),
              type: "productivity"
            }
          ]
        }
    )


    const dict = {
      "Day : Layup, FirstEL, Framing, Sorting, Pack": FIRST_AMOUNT,
      "Night : Layup, FirstEL, Framing, Sorting, Pack": SECOND_AMOUNT,
      "NN : Layup, FirstEL, Framing, Sorting, Pack": THIRD_AMOUNT,
    };
    const data2 = dataOutput.filter(item => (item.amount <= dict[item.shift])).map(item => ({
      ...item,
      amount: dict[item.shift] - item.amount,
      type: 'to target',
    }));
    // console.log(data2)

    dataToShow = [...data2, ...dataOutput]
    // console.log(dataToShow)
    column.changeData(dataToShow)

  });
}


onMounted(() => {
  column = new Column('container12', {
    data: dataToShow,
    xField: 'shift',
    yField: 'amount',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'col_name',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // // 数据标签防遮挡
        {type: 'interval-hide-overlap'},
        // // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },
    colorField: 'type', // 部分图表使用 seriesField
    color: ['#f391a9', '#00ae9d', '#000000'],
  });
  column.render();
  // console.log("onMount")
})

</script>

<template>
  <div id="container12"/>
</template>


<style scoped>

</style>