<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';


let dataToShow = [];
let column;


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

function axiosCall() {
  // console.log("currentDay", currentDay)
  // console.log("tomorrowDay", tomorrowDay)
  let dataFromBack;
  let dataOutput = [];
  axios({
    url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetSummaryDataList",
    method: "GET",
    params: {
      StartTime: currentDay + " 00:01:00",
      EndTime: tomorrowDay + " 00:01:00",
      TimesFlag: 7,
      MaxResultCount: 1000,
      LineCodes: "SJC01-01"

    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    dataFromBack = response.data.result.items;
    // console.log(dataFromBack)
    let dayLayup = 0;
    let dayFirstel = 0;
    let dayFraming = 0;
    let daySorting = 0;
    let dayPack = 0;
    dataFromBack.forEach(item => {
          if (item.ShiftValue === 'Day') {
            dayLayup = dayLayup + parseInt(item.Layup);
            dayFirstel = dayFirstel + parseInt(item["EL-1"]);
            dayFraming = dayFraming + parseInt(item["Framing&JB"]);
            daySorting = daySorting + parseInt(item.Sorting)
            dayPack = dayPack + parseInt(item.Pack);
          } else if (item.ShiftValue === 'Night') {
            dayLayup = dayLayup + parseInt(item.Layup);
            dayFirstel = dayFirstel + parseInt(item["EL-1"]);
            dayFraming = dayFraming + parseInt(item["Framing&JB"]);
            daySorting = daySorting + parseInt(item.Sorting)
            dayPack = dayPack + parseInt(item.Pack);
          } else if (item.ShiftValue === 'NN') {
            dayLayup = dayLayup + parseInt(item.Layup);
            dayFirstel = dayFirstel + parseInt(item["EL-1"]);
            dayFraming = dayFraming + parseInt(item["Framing&JB"]);
            daySorting = daySorting + parseInt(item.Sorting)
            dayPack = dayPack + parseInt(item.Pack);
          }
        }
    )

    dataOutput = [
      {
        col_name: "Layup",
        amount: dayLayup,
        type: "productivity",
        alias: "layup"
      },
      {
        col_name: "EL-1",
        amount: dayFirstel,
        type: "productivity",
        alias: "firstel"
      },
      {
        col_name: "Framing&JB",
        amount: dayFraming,
        type: "productivity",
        alias: "framing"
      },
      {
        col_name: "Sorting",
        amount: daySorting,
        type: "productivity",
        alias: "sorting"
      },
      {
        col_name: "Pack",
        amount: dayPack,
        type: "productivity",
        alias: "packing"
      }
    ]

    const dataOutput2 = [
      {
        col_name: "Layup",
        amount: 0,
        type: "to target",
        alias: "layup"
      },

    ]

    const currentDate = new Date();
    let currentDayIndex = currentDate.getDay();
    currentDayIndex = currentDayIndex === 0? 7:currentDayIndex

    axios({
      url: "/apiStringer/plan/getSchedule",
      method: "POST",
      data: {},
      contentType: "json",
      processData: false,
      dataType: "json",
    }).then(function (response) {
      const dataFromBack = response.data.data

      const data2 = dataOutput.filter(item => (item.amount <= dataFromBack[item.alias+currentDayIndex])).map(item => ({
        ...item,
        amount: dataFromBack[item.alias+currentDayIndex] - item.amount,
        type: 'to target',
      }));

      let data3 = []
      data3 = [...dataOutput2]
      dataOutput.forEach(item => {

        if(item.amount <= dataFromBack[item.alias+currentDayIndex]){
          data3.push({
            ...item,
            amount: dataFromBack[item.alias+currentDayIndex] - item.amount,
            type: 'to target',
          })
        }
        data3.push(item)
          }
      )
      // console.log(data3)

      // dataToShow = [...dataOutput, ...data2]
      dataToShow = [...data3]
      console.log(dataToShow)
      column.changeData(dataToShow)
    })

    // const data2 = dataOutput.filter(item => (item.amount <= 800)).map(item => ({
    //   ...item,
    //   amount: 800 - item.amount,
    //   type: 'to target',
    // }));
    // // console.log(data2)
    //
    // dataToShow = [...data2, ...dataOutput]
    // // console.log(dataToShow)
    // column.changeData(dataToShow)

  });
}


onMounted(() => {
  column = new Column('container12', {
    data: dataToShow,
    xField: 'col_name',
    yField: 'amount',
    // isGroup: true,
    isStack: true,
    seriesField: 'type',
    // groupField: 'col_name',
    xAxis: {
      label: {
        style: {
          fontSize: 14, // Adjust y-axis label font size
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
      position: 'middle', // 'top', 'bottom', 'middle'
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