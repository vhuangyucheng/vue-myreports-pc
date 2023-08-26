<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'

const props = defineProps(['data1','chartName'])

watch(()=>props.data1, (newVal, oldVal) => {
  console.log('2监听引用类型数据dataList')
  console.log('new', newVal)
  console.log('old', oldVal)
})

let column;

const data1 = [
  {
    shift: "Day",
    amount: 0,
    type: "productivity",
    col_name: "Layup",
  },
  {
    shift: "Day",
    amount: 0,
    type: "productivity",
    col_name: "FirstEL",
  },
  {
    shift: "Day",
    amount: 0,
    type: "productivity",
    col_name: "Framing",
  },
  {
    shift: "Day",
    amount: 0,
    type: "productivity",
    col_name: "Sorting",
  },
  {
    shift: "Night",
    amount: 0,
    type: "productivity",
    col_name: "layup",
  },
  {
    shift: "NN",
    amount: 0,
    type: "productivity",
    col_name: "layup",
  },
]

let FIRST_AMOUNT = 0;
let SECOND_AMOUNT = 0;
let THIRD_AMOUNT = 0;

if("line2" === props.chartName){
  FIRST_AMOUNT = 600;
  SECOND_AMOUNT = 600;
  THIRD_AMOUNT = 300;
}
if("line1" === props.chartName){
  FIRST_AMOUNT = 400;
  SECOND_AMOUNT = 400;
  THIRD_AMOUNT = 300;
}


const dict = {
  "Day": FIRST_AMOUNT,
  "Night": SECOND_AMOUNT,
  "NN": THIRD_AMOUNT,
};

const data2 = data1.filter(item => (item.amount <= dict[item.shift])).map(item => ({
  ...item,
  amount: dict[item.shift] - item.amount,
  type: 'to target',
}));

const data = [...data2, ...data1]

// console.log(data)

onMounted(() => {
  column = new Column("line1DailyThursday"+props.chartName, {
    data: data,
    xField: 'shift',
    yField: 'amount',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'col_name',

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
  <div :id="'line1DailyThursday'+ props.chartName " :style="{height:'200px'}"/>
</template>


<style scoped>

</style>