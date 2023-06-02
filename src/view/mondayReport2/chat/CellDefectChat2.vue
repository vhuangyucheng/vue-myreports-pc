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
    value: 97,
  },
  {
    NG: 'NG',
    shift: 'second',
    value: 99.5,
  },
  {
    NG: 'good',
    shift: 'third',
    value: 98,
  },
  {
    NG: 'NG',
    shift: 'third',
    value: 97,
  }
];



onMounted(() => {
  const columnPlot = new Column('container2', {
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
  <div id="container2" />
</template>


<style scoped>

</style>