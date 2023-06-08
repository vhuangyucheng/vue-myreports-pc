<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const data = [
  {
    name: 'Miss-welding',
    月份: 'First',
    月均降雨量: 18.9,
  },
  {
    name: 'Miss-welding',
    月份: 'Second',
    月均降雨量: 28.8,
  },
  {
    name: 'Miss-welding',
    月份: 'Third',
    月均降雨量: 39.3,
  },

  {
    name: 'Over-Welding',
    月份: 'First',
    月均降雨量: 12.4,
  },
  {
    name: 'Over-Welding',
    月份: 'Second',
    月均降雨量: 23.2,
  },
  {
    name: 'Over-Welding',
    月份: 'Third',
    月均降雨量: 34.5,
  },
 
];


onMounted(() => {
  const stackedColumnPlot = new Column('ELDefectChat01', {
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
        { type: 'interval-adjust-position' },
        // 数据标签防遮挡
        { type: 'interval-hide-overlap' },
        // 数据标签文颜色自动调整
        { type: 'adjust-color' },
      ],
    },
  });

  stackedColumnPlot.render();
})

</script>

<template>
  <div id="ELDefectChat01"/>
</template>


<style scoped>

</style>