<script setup>
var currentTime
function dailyTask() {
  // Your task logic goes here
  console.log("Running daily task at 6:45 am");
}

function startDailyTask() {
  // Get the current time
  var currentTime = new Date();

  // Calculate the time until the next 6:45 am
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
  setTimeout(function() {
    dailyTask(); // Run the task immediately
    setInterval(dailyTask, 24 * 60 * 60 * 1000); // Repeat the task every 24 hours
  }, timeDifference);
}

// Start the daily task
startDailyTask();

import axios from "axios";

let dataFromBack = ref([]);
axios({
  url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetDetailDataList",
  method: "GET",
  params: {
    StartTime: "2023/7/7 8:00:00",
    EndTime: "2023/7/9 20:00:00",
    TimesFlag: 7,
    MaxResultCount: 1000
  },
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  dataFromBack.value = response.data.result;
});
// console.log(dataFromBack.value)

import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const data = {
  id: "Stringer21", //String21, , Stringer22, Stringer23,
  defect: [
    {
      reason: 'Miss-welding',//不良原因
      shift: 'First', //第几个班： First, Second, Third
      amount: 27,  //这个原因的数量
      type:"A"// a侧b侧
    },
    {
      reason: 'Crack',
      shift: 'First',
      amount: 33,
      type:"A"// a侧b侧

    },
    {
      reason: 'others',
      shift: 'First',
      amount: 33,
      type:"A"// a侧b侧
    },
    {
      reason: 'Miss-welding',
      shift: 'Second',
      amount: 6,
      type:"A"// a侧b侧
    },
    {
      reason: 'Crack',
      shift: 'Second',
      amount: 6,
      type:"A"// a侧b侧
    },
    {
      reason: 'Excessive corrosion',
      shift: 'Second',
      amount: 1,
      type:"A"// a侧b侧
    },
    {
      reason: 'Miss-welding',
      shift: 'Third',
      amount: 47,
      type:"A"// a侧b侧
    },


    {
      reason: 'Crack',
      shift: 'Third',
      amount: 48,
      type:"A"// a侧b侧
    },
    {
      reason: 'Short',
      shift: 'Third',
      amount: 2,
      type:"A"// a侧b侧
    },

  ]
};

onMounted(() => {
  const stackedColumnPlot = new Column('ELDefectChat01', {
    data: data.defect,
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
      position: 'middle', // 'top', 'middle', 'bottom'
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
    <div id="ELDefectChat01" :style="{height:'300px'}"/>
  </div>
</template>


<style scoped>

</style>