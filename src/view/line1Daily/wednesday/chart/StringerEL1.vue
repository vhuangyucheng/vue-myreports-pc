<script setup>
import {Column} from '@antv/g2plot';

const data = [
  {
    name: 'Miss-welding虚焊',
    shift: 'Day',
    amount: 6,
  },
  {
    name: '露白',
    shift: 'Day',
    amount: 1,
  },
  {
    name: 'Silver裂片',
    shift: 'Day',
    amount: 2,
  },
  {
    name: 'Miss-welding虚焊',
    shift: 'Night',
    amount: 0,
  },
  {
    name: '露白',
    shift: 'Night',
    amount: 0
  },
  {
    name: 'Silver裂片',
    shift: 'Night',
    amount: 0,
  },


];
let stackedColumnPlot ;

onMounted(() => {
  stackedColumnPlot = new Column('line1DailyWednesdayStringerEL', {
    data: data,
    isGroup: true,
    xField: 'shift',
    yField: 'amount',
    seriesField: 'name',
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
    <div>String Defect 焊机不良 : Day = 9, Night = </div>
    <div id="line1DailyWednesdayStringerEL" :style="{height:'180px'}"/>
  </div>
</template>


<style scoped>

</style>