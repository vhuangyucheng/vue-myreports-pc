<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';


let dataToShow = [];
let column;
let to2025 = ref(0);

// const targetDate = new Date("2025-01-01");
//
// // 定义一个更新倒计时的函数
// function updateCountdown() {
//   const today = new Date();
//
//   // 计算剩余的毫秒数，然后转换为天数
//   const timeDiff = targetDate - today;
//   const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//
//   // 更新页面上的倒计时显示
//   to2025.value = daysRemaining
// }
//
// // 首次加载时调用函数
// updateCountdown();
//
// // 设置定时器，每天午夜更新一次
// const now = new Date();
// const msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();
// setTimeout(() => {
//   updateCountdown();
//   setInterval(updateCountdown, 24 * 60 * 60 * 1000); // 每24小时更新
// }, msUntilMidnight);


 axiosCall()
self.setInterval(() => {
  axiosCall()
  // console.log("output timer")
}, 1000 * 60* 60);


function axiosCall() {
  // console.log("currentDay", currentDay)
  // console.log("tomorrowDay", tomorrowDay)
  let dataFromBack;
  let dataOutput = [];
  axios({
    url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetSummaryDataList",
    method: "GET",
    params: {
      StartTime: "2025/1/1 00:01:00",
      EndTime: "2025/1/31 00:01:00",
      TimesFlag: 7,
      RouteOperations: "Pack"
      // LineCodes: "SJC01-01"

    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    dataFromBack = response.data.result.items;
    console.log(dataFromBack)
    console.log("22")

    let dayPack = 0;
    dataFromBack.forEach(item => {
          if (item.ShiftValue === 'Day') {
            dayPack = dayPack + parseInt(item.Pack);
          } else if (item.ShiftValue === 'Night') {
            dayPack = dayPack + parseInt(item.Pack);
          } else if (item.ShiftValue === 'NN') {
            dayPack = dayPack + parseInt(item.Pack);
          }
        }
    )

    dataOutput = [
      {
        col_name: "Jan.一月",
        amount: 8000 - dayPack,
        type: "未完成",
        alias: "packing"
      },
      {
        col_name: "Jan.一月",
        amount: dayPack,
        type: "已完成打包",
        alias: "packing"
      }
    ]
    column.changeData(dataOutput)
  });
}


onMounted(() => {
  column = new Column('container24', {
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
  <div id="chartTitle">一月完成组件 Jan. Completion</div>
  <div id="container24" :style="{height:'350px'}"/>
</template>


<style scoped>
#chartTitle {
  font-weight: bold;
  font-size: 25px;
  text-shadow: 0px 0px 0px
}
</style>