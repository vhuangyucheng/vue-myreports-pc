<script setup>
import {Column} from '@antv/g2plot';

const CELL_OOB = 99.7;
const CELL_MANUFACTURE = 99.7;
const CELL_STRING = 95;
const CELL_EL1 = 95;
const CELL_VQC = 99.9;
const CELL_FRAMING = 100;
const CELL_JBOX = 100;
const CELL_JBOXSOLDING = 99.9;
const CELL_IV = 100;
const CELL_FQC = 99.8;
const CELL_FIRST_PASS = 94;

const data = [
  {
    country: 'To 100%',
    year: '电池片合格率（来料）',
    value: 100-99.77,
  },
  {
    country: 'To target',
    year: '电池片合格率（来料）',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '电池片合格率（来料）',
    value: 99.77,
  },
  {
    country: 'To 100%',
    year: '电池片合格率（制程）',
    value: 100-99.88,
  },
  {
    country: 'To target',
    year: '电池片合格率（制程）',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '电池片合格率（制程）',
    value: 99.88,
  },
  {
    country: 'To 100%',
    year: '电池串合格率',
    value: 100-97.14,
  },
  {
    country: 'To target',
    year: '电池串合格率',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '电池串合格率',
    value: 97.14,
  },
  {
    country: 'To 100%',
    year: '层前EL合格率',
    value: 100-95,
  },
  {
    country: 'To target',
    year: '层前EL合格率',
    value: 95-90.54,
  },
  {
    country: 'Defect Rate',
    year: '层前EL合格率',
    value: 90.54,
  },
  {
    country: 'To target',
    year: '外观检验合格率',
    value: 0,
  },
  {
    country: 'To 100%',
    year: '外观检验合格率',
    value: 100-99.78,
  },
  {
    country: 'Defect Rate',
    year: '外观检验合格率',
    value: 99.78,
  },
  {
    country: 'To 100%',
    year: '组框合格率',
    value: 0,
  },
  {
    country: 'To target',
    year: '组框合格率',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '组框合格率',
    value: 100,
  },
  {
    country: 'To 100%',
    year: '接线盒合格率（安装）',
    value: 0,
  },
  {
    country: 'To target',
    year: '接线盒合格率（安装）',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '接线盒合格率（安装）',
    value: 100,
  },
  {
    country: 'To 100%',
    year: '接线盒合格率（焊接）',
    value: 0,
  },
  {
    country: 'To target',
    year: '接线盒合格率（焊接）',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '接线盒合格率（焊接）',
    value: 100,
  },
  {
    country: 'To 100%',
    year: '功率测试合格率',
    value: 0,
  },
  {
    country: 'To target',
    year: '功率测试合格率',
    value: 0,
  },
  {
    country: 'Defect Rate',
    year: '功率测试合格率',
    value: 100,
  },
  {
    country: 'To 100%',
    year: '终检合格率',
    value: 100-99.8,
  },
  {
    country: 'To target',
    year: '终检合格率',
    value: 99.8-99.77,
  },
  {
    country: 'Defect Rate',
    year: '终检合格率',
    value: 99.77,
  },
  {
    country: 'To 100%',
    year: '一次通过率',
    value: 100-94,
  },
  {
    country: 'To target',
    year: '一次通过率',
    value: 94-84.36,
  },
  {
    country: 'Defect Rate',
    year: '一次通过率',
    value: 84.36,
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
        return item.value.toFixed(4);
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