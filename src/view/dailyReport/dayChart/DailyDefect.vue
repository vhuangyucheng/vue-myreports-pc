<script setup>
import { Bullet } from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'

const props = defineProps(['data1','chartName'])
const data = [
  {
    title: '成品FD',
    ranges: [30, 120],
    measures: [40],
    target: 85,
  },
  {
    title: '层前EL',
    ranges: [30, 120],
    measures: [50],
    target: 100,
  },

  {
    title: '串String',
    ranges: [30, 120],
    measures: [100],
    target: 80,
  },

];
let bulletPlot;
onMounted(() => {
   bulletPlot = new Bullet('dailyChartDailyDefect'+ props.chartName, {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#f391a9', '#bfeec8'],
      measure: '#00ae9d',
      target: '#39a3f4',
    },
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#ffffff',
        },
      },
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差bad',
          marker: { symbol: 'square', style: { fill: '#f391a9', r: 5 } },
        },

        {
          value: '优',
          name: '优good',
          marker: { symbol: 'square', style: { fill: '#bfeec8', r: 5 } },
        },
        {
          value: '实际值',
          name: '实际值',
          marker: { symbol: 'square', style: { fill: '#00ae9d', r: 5 } },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: { symbol: 'line', style: { stroke: '#39a3f4', r: 7 } },
        },
      ],
    },
  });

  bulletPlot.render();
})


</script>

<template>
  <div>
    <div>String Defect 焊机不良 : Day = 9, Night =</div>
    <div :id="'dailyChartDailyDefect'+ props.chartName" :style="{height:'180px'}"/>
  </div>
</template>


<style scoped>

</style>