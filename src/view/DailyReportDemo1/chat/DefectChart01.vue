<script setup>
import {Column} from '@antv/g2plot';

const data = [
  {
    country: 'To 100%',
    year: '电池片合格率（来料）',
    value: 21,
  },
  {
    country: 'To target',
    year: '电池片合格率（来料）',
    value: 21,
  },
  {
    country: 'Defect Rate',
    year: '电池片合格率（来料）',
    value: 21,
  },
  {
    country: 'To 100%',
    year: '电池片合格率（制程）',
    value: 635,
  },
  {
    country: 'To target',
    year: '电池片合格率（制程）',
    value: 635,
  },
  {
    country: 'Defect Rate',
    year: '电池片合格率（制程）',
    value: 635,
  },
  {
    country: 'To 100%',
    year: '电池串合格率',
    value: 809,
  },
  {
    country: 'To target',
    year: '电池串合格率',
    value: 809,
  },
  {
    country: 'Defect Rate',
    year: '电池串合格率',
    value: 809,
  },
  {
    country: 'To 100%',
    year: '层前EL合格率',
    value: 947,
  },
  {
    country: 'To target',
    year: '层前EL合格率',
    value: 947,
  },
  {
    country: 'Defect Rate',
    year: '层前EL合格率',
    value: 947,
  },
  {
    country: 'To target',
    year: '外观检验合格率',
    value: 1402,
  },
  {
    country: 'To 100%',
    year: '外观检验合格率',
    value: 1402,
  },
  {
    country: 'Defect Rate',
    year: '外观检验合格率',
    value: 1402,
  },
  {
    country: 'To 100%',
    year: '组框合格率',
    value: 3634,
  },
  {
    country: 'To target',
    year: '组框合格率',
    value: 3634,
  },
  {
    country: 'Defect Rate',
    year: '组框合格率',
    value: 3634,
  },
  {
    country: 'To 100%',
    year: '接线盒合格率（安装）',
    value: 5268,
  },
  {
    country: 'To target',
    year: '接线盒合格率（安装）',
    value: 5268,
  },
  {
    country: 'Defect Rate',
    year: '接线盒合格率（安装）',
    value: 5268,
  },
  {
    country: 'To 100%',
    year: '接线盒合格率（焊接）',
    value: 106,
  },
  {
    country: 'To target',
    year: '接线盒合格率（焊接）',
    value: 106,
  },
  {
    country: 'Defect Rate',
    year: '接线盒合格率（焊接）',
    value: 106,
  },
  {
    country: 'To 100%',
    year: '功率测试合格率',
    value: 107,
  },
  {
    country: 'To target',
    year: '功率测试合格率',
    value: 107,
  },
  {
    country: 'Defect Rate',
    year: '功率测试合格率',
    value: 107,
  },
  {
    country: 'To 100%',
    year: '终检合格率',
    value: 111,
  },
  {
    country: 'To target',
    year: '终检合格率',
    value: 111,
  },
  {
    country: 'Defect Rate',
    year: '终检合格率',
    value: 111,
  },
  {
    country: 'To 100%',
    year: '一次通过率',
    value: 133,
  },
  {
    country: 'To target',
    year: '一次通过率',
    value: 133,
  },
  {
    country: 'Defect Rate',
    year: '一次通过率',
    value: 133,
  }
];



onMounted(() => {
  const columnPlot = new Column('defectChart01', {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
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
  <div id="defectChart01" />
</template>


<style scoped>

</style>