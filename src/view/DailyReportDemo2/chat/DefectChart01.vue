<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const data = [
  {
    name: 'Miss-welding',
    月份: 'First',
    月均降雨量: 27,
  },
  {
    name: 'Crack',
    月份: 'First',
    月均降雨量: 33,
  },
  {
    name: 'others',
    月份: 'First',
    月均降雨量: 33,
  },
  {
    name: 'Miss-welding',
    月份: 'Second',
    月均降雨量: 6,
  },
  {
    name: 'Crack',
    月份: 'Second',
    月均降雨量: 6,
  },
  {
    name: 'Excessive corrosion',
    月份: 'Second',
    月均降雨量: 1,
  },
  {
    name: 'Miss-welding',
    月份: 'Third',
    月均降雨量: 47,
  },


  {
    name: 'Crack',
    月份: 'Third',
    月均降雨量: 48,
  },
  {
    name: 'Short',
    月份: 'Third',
    月均降雨量: 2,
  },

];
const data2 = [
  {
    name: 'Miss-welding',
    月份: 'First',
    月均降雨量: 27,
  },
  {
    name: 'Crack',
    月份: 'First',
    月均降雨量: 33,
  },
  {
    name: 'others',
    月份: 'First',
    月均降雨量: 33,
  },
  {
    name: 'Miss-welding',
    月份: 'Second',
    月均降雨量: 6,
  },
  {
    name: 'Crack',
    月份: 'Second',
    月均降雨量: 6,
  },
  {
    name: 'Excessive corrosion',
    月份: 'Second',
    月均降雨量: 1,
  },
  {
    name: 'Miss-welding',
    月份: 'Third',
    月均降雨量: 47,
  },


  {
    name: 'Crack',
    月份: 'Third',
    月均降雨量: 48,
  },
  {
    name: 'Short',
    月份: 'Third',
    月均降雨量: 4,
  },

];

onMounted(() => {
  const stackedColumnPlot = new Column('defectChar01', {
    data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
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
    <div id="defectChar01" :style="{height:'150px'}"/>
  </div>
</template>


<style scoped>

</style>