<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';

let column;

const data1 = [
  {
    shift: "Day",
    amount: 81,
    type: "productivity"
  },
  {
    shift: "Night",
    amount: 140,
    type: "productivity"
  },
]

const FIRST_AMOUNT = 250;
const SECOND_AMOUNT = 250;

const dict = {
  "Day": FIRST_AMOUNT,
  "Night": SECOND_AMOUNT,
};

const data2 = data1.filter(item => (item.amount <= dict[item.shift])).map(item => ({
  ...item,
  amount: dict[item.shift] - item.amount,
  type: 'to target',
}));

const data = [...data2, ...data1]

console.log(data)

onMounted(() => {
  column = new Column('line1DailyThursday', {
    data: data,
    xField: 'shift',
    yField: 'amount',
    isGroup: false,
    isStack: true,
    seriesField: 'type',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // // 数据标签防遮挡
        {type: 'interval-hide-overlap'},
        // // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },
    colorField: 'type', // 部分图表使用 seriesField
    color: ['#f391a9', '#00ae9d', '#000000'],
  });
  column.render();
  // console.log("onMount")
})

</script>

<template>
  <div>今日产量</div>
  <div id="line1DailyThursday" :style="{height:'200px'}"/>
</template>


<style scoped>

</style>