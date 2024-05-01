<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

let data = [];
let stackedColumnPlot ;

//  function jsonCall() {
//   fetch('src/view/DailyReportDemo2/chat/data.json')
//       .then(response => response.json())
//       .then(data => {
//         // Access the JSON data
//         // console.log(data.data);
//         // Perform further operations with the data
//         stackedColumnPlot.changeData(data.data);
//       })
// }
// jsonCall();
// self.setInterval(() => {
//   jsonCall();
//   // console.log("stringer21-defect timer")
// }, 1000 * 60);

onMounted(() => {


  stackedColumnPlot = new Column('defectChar01', {
    data,
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
      position: 'bottom', // 'top', 'middle', 'bottom'
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
    <div>String21 Defect Breakdown(not done yet, fake data)</div>
    <div id="defectChar01" :style="{height:'150px'}"/>
  </div>
</template>


<style scoped>

</style>