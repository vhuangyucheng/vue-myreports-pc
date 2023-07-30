<script setup>
import {Column} from '@antv/g2plot';

const data = [
  {
    name: '组件破片',
    shift: 'Day',
    amount: 45,
  },
  {
    name: '返修串破片',
    shift: 'Day',
    amount: 88,
  },
  {
    name: '焊机破片',
    shift: 'Day',
    amount: 5,
  },
  {
    name: '过焊',
    shift: 'Day',
    amount: 2,
  },
  {
    name: '组件破片',
    shift: 'Night',
    amount: 0,
  },
  {
    name: '返修串破片',
    shift: 'Night',
    amount: 0,
  },
  {
    name: '焊机破片',
    shift: 'Night',
    amount: 0,
  },
  {
    name: '焊机破片',
    shift: 'Night',
    amount: 0,
  },
];
let stackedColumnPlot ;

onMounted(() => {
  stackedColumnPlot = new Column('line1DailyWednesdayScrap', {
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
    <div>Cells Scrap 报废 : Day = 140 ,  Night = 217</div>
    <div id="line1DailyWednesdayScrap" :style="{height:'180px'}" />
  </div>
</template>


<style scoped>

</style>