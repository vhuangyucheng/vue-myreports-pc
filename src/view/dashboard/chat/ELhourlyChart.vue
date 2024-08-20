<script setup>

let firstNGRate = ref(0)
let dataToShow = []

import getDate from '../../../store/getDate';

const getDateStore = getDate();

let currentDay;
let tomorrowDay;
let stackedColumnPlot;

function dailyTask() {
  // Your task logic goes here
  var currentTime = new Date();
  var nextDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

  currentDay = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()
  tomorrowDay = nextDate.getFullYear() + "/" + (nextDate.getMonth() + 1) + "/" + nextDate.getDate()
  getDateStore.setDate(currentDay, tomorrowDay);
  // console.log("output currentDay : " + currentDay)
  // console.log("output tomorrowDay : " + tomorrowDay)
}

//1,set定时任务，2，跑一下开机任务
function startDailyTask() {
  // Calculate the time until the next 0:0:0 am
  var currentTime = new Date();
  var targetTime = new Date();
  targetTime.setHours(0);
  targetTime.setMinutes(1);
  targetTime.setSeconds(1);


  targetTime.setDate(targetTime.getDate() + 1);
  var timeDifference = targetTime - currentTime;

  dailyTask(); // Run the task immediately
  setTimeout(function () {
    dailyTask(); // Run the task immediately
    setInterval(dailyTask, 24 * 60 * 60 * 1000); // Repeat the task every 24 hours
  }, timeDifference);

  axiosCall();
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

function getHour(timestampStr) {
  return new Date(timestampStr).getHours();
}
let dataFromBack = [];

function axiosCall() {
  // console.log("currentDay", currentDay)
  // console.log("tomorrowDay", tomorrowDay)
  axios({
    url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetDetailDataList",
    method: "GET",
    params: {
      StartTime: currentDay + " 00:01:00",
      EndTime: tomorrowDay + " 00:01:00",
      TimesFlag: 7,
      MaxResultCount: 1000,
      RouteOperations: "EL-1",
      LineCodes: "SJC01-01",
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
        StartTime: currentDay + " 00:01:00",
        EndTime: tomorrowDay + " 00:01:00",
        TimesFlag: 7,
        MaxResultCount: 1000,
        RouteOperations: "EL-1",
        LineCodes: "SJC01-01",
        SkipCount: 1000
      },
      contentType: "json",
      processData: false,
      dataType: "json",
    }).then(function (response) {
      dataFromBack = [...dataFromBack, ...response.data.result.items];
      // console.log(dataFromBack)
      // 分shift和原因

// Object to hold hourly counts
      const hourlyCounts = {};

// Count objects by hour
      dataFromBack.forEach(obj => {
        const hour = getHour(obj.creationTime);
        if (hour in hourlyCounts) {
          hourlyCounts[hour]++;
        } else {
          hourlyCounts[hour] = 1;
        }
      });

// Display the hourly counts
      dataToShow = []
      for (const hour in hourlyCounts) {
        // console.log(`Hour ${hour}: ${hourlyCounts[hour]} objects created`);
        dataToShow.push({
          hour: hour,//不良原因
          amount: hourlyCounts[hour],  //这个原因的数量
        })
      }
      stackedColumnPlot.changeData(dataToShow)
    })
  })
};

onMounted(() => {
  stackedColumnPlot = new Column('ELDefectChat04', {
    data: dataToShow,
    // isGroup: true,
    xField: 'hour',
    yField: 'amount',
    colorField: 'seriesField', // 部分图表使用 seriesField
    color: ['#f391a9', '#00ae9d', '#000000'],
    /** 设置间距 */
    // marginRatio: 0.1,
    xAxis: {
      label: {
        style: {
          fontSize: 30, // Adjust y-axis label font size
          fontWeight: 'bold',
        }
      }
    },
    yAxis: {
      label: {
        style: {
          fontSize: 23, // Adjust y-axis label font size
          fontWeight: 'bold',
        }
      }
    },
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
    <div id="chartTitle">First-EL hourly output</div>
    <div id="ELDefectChat04" :style="{height:'300px'}"/>
  </div>
</template>



<style scoped>
#chartTitle {
  font-weight: bold;
  font-size: 25px;
  text-shadow: 0px 0px 0px
}
</style>