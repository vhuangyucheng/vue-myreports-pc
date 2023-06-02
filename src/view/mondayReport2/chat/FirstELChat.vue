<script setup>
import {Column} from '@antv/g2plot';

const data = [
  {
    NG: 'NG',
    shift: 'first',
    value: 0.5,
  },
  {
    NG: 'good',
    shift: 'first',
    value: 99.5,
  },

  {
    NG: 'good',
    shift: 'second',
    value: 487,
  },
  {
    NG: 'NG',
    shift: 'second',
    value: 110.5,
  },
  {
    NG: 'good',
    shift: 'third',
    value: 487,
  },
  {
    NG: 'NG',
    shift: 'third',
    value: 110,
  }
];



onMounted(() => {
  const columnPlot = new Column('container4', {
    data,
    xField: 'shift',
    yField: 'value',
    seriesField: 'NG',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      content: (item) => {
        return item.value.toFixed(2);
      },
      style: {
        fill: '#fff',
      },
    },
  });
  columnPlot.render();
})

</script>

<template>
  <div id="container4" />
</template>


<style scoped>

</style>