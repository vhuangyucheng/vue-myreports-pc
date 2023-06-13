<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const FIRST_AMOUNT = 600;
const SECOND_AMOUNT = 600;
const THIRD_AMOUNT = 300;
const data = [

  {
    "shift": "First",
    "stringer": "String21",
    "amount": 444,
    "type": "productivity"
  },

  {
    "shift": "First",
    "stringer": "String22",
    "amount": 452,
    "type": "productivity"
  },

  {
    "shift": "First",
    "stringer": "String23",
    "amount": 419,
    "type": "productivity"
  },

  {
    "shift": "Second",
    "stringer": "String21",
    "amount": 510,
    "type": "productivity"
  },



  {
    "shift": "Second",
    "stringer": "String22",
    "amount": 502,
    "type": "productivity"
  },

  {
    "shift": "Second",
    "stringer": "String23",
    "amount": 438,
    "type": "productivity"
  },

  {
    "shift": "Third",
    "stringer": "String21",
    "amount": 5,
    "type": "productivity"
  },

  {
    "shift": "Third",
    "stringer": "String22",
    "amount": 93,
    "type": "productivity"
  },

  {
    "shift": "Third",
    "stringer": "String23",
    "amount": 267,
    "type": "productivity"
  }
]


onMounted(() => {
  const annotations = [];
  each(groupBy(data, 'type'), (values, k) => {
    const value = values.reduce((a, b) => a.productivity + b.productivity, 0);
    annotations.push({
      type: 'text',
      position: [k, value],
      content: `${value}`,
      style: {textAlign: 'center', fontSize: 14, fill: 'rgba(0,0,0,0.85)'},
      offsetY: -10,
    });
  });
  const column = new Column('stringerOutput', {
    data,
    xField: 'shift',
    yField: 'amount',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'stringer',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
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
    // 使用 annotation （图形标注）来展示：总数的 label
    annotations,
  });

  column.render();
})

</script>

<template>
  <div id="stringerOutput"/>
</template>


<style scoped>

</style>