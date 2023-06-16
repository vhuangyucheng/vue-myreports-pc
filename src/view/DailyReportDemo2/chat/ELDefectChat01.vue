<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const data = [
  {
    reason: 'Miss-welding',
    shift: 'First',
    amount: 27,
  },
  {
    reason: 'Crack',
    shift: 'First',
    amount: 33,
  },
  {
    reason: 'others',
    shift: 'First',
    amount: 33,
  },
  {
    reason: 'Miss-welding',
    shift: 'Second',
    amount: 6,
  },
  {
    reason: 'Crack',
    shift: 'Second',
    amount: 6,
  },
  {
    reason: 'Excessive corrosion',
    shift: 'Second',
    amount: 1,
  },
  {
    reason: 'Miss-welding',
    shift: 'Third',
    amount: 47,
  },


  {
    reason: 'Crack',
    shift: 'Third',
    amount: 48,
  },
  {
    reason: 'Short',
    shift: 'Third',
    amount: 2,
  },

];
const data2 = [
  {
    reason: 'Miss-welding',
    shift: 'First',
    amount: 27,
  },
  {
    reason: 'Crack',
    shift: 'First',
    amount: 33,
  },
  {
    reason: 'others',
    shift: 'First',
    amount: 33,
  },
  {
    reason: 'Miss-welding',
    shift: 'Second',
    amount: 6,
  },
  {
    reason: 'Crack',
    shift: 'Second',
    amount: 6,
  },
  {
    reason: 'Excessive corrosion',
    shift: 'Second',
    amount: 1,
  },
  {
    reason: 'Miss-welding',
    shift: 'Third',
    amount: 47,
  },


  {
    reason: 'Crack',
    shift: 'Third',
    amount: 48,
  },
  {
    reason: 'Short',
    shift: 'Third',
    amount: 4,
  },

];

onMounted(() => {
  const stackedColumnPlot = new Column('ELDefectChat01', {
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
  <div >
    <div id="ELDefectChat01" :style="{height:'300px'}"/>
  </div>
</template>


<style scoped>

</style>