<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'

const props = defineProps(['dataFromPa', 'chartName'])


let column;

let data1 = [
  // {
  //   shift: "Day",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "Layup",
  // },
  // {
  //   shift: "Day",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "FirstEL",
  // },
  // {
  //   shift: "Day",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "Framing",
  // },
  // {
  //   shift: "Day",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "Sorting",
  // },
  // {
  //   shift: "Night",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "layup",
  // },
  // {
  //   shift: "Night",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "FirstEL",
  // },
  // {
  //   shift: "Night",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "Framing",
  // },
  // {
  //   shift: "Night",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "Sorting",
  // },
  //
  // {
  //   shift: "NN",
  //   amount: 0,
  //   type: "productivity",
  //   col_name: "Sorting",
  // },
]

let divider
if ("line2" === props.chartName) {
  divider = 12;

}
if ("line1" === props.chartName) {
  divider = 6;
}


watch(() => props.dataFromPa, (newVal, oldVal) => {
  // console.log('2监听引用类型数据dataList')
  // console.log('new', newVal)
  // console.log('old', oldVal)
  data1 = [];
  let shiftValue = "";
  let col_name = "";
  newVal.forEach(item => {
    switch (item.shiftId % 10) {
      case 1:
        shiftValue = "Day"
        break;
      case 2:
        shiftValue = "Night"
        break;
      case 3:
        shiftValue = "NN"
        break;
    }
    let layup = {
      shift: shiftValue,
      amount:Math.ceil((item.stringer3Output + item.stringer1Output + item.stringer2Output)/divider),
      type: "productivity",
      col_name: "layup",
    }
    let FirstEL = {
      shift: shiftValue,
      amount: item.firstel2Output,
      type: "productivity",
      col_name: "FirstEL",
    }
    let Framing = {
      shift: shiftValue,
      amount: Number(item.framingOutput),
      type: "productivity",
      col_name: "Framing",
    }
    let Sorting = {
      shift: shiftValue,
      amount: Number(item.secondelOutput),
      type: "productivity",
      col_name: "Sorting",
    }
    let Packing = {
      shift: shiftValue,
      amount: Number(item.packing),
      type: "productivity",
      col_name: "Packing",
    }
    // let packing = {
    //   shift: shiftValue,
    //   amount: Number(item.packing),
    //   // amount: 700,
    //   type: "productivity",
    //   col_name: "packing",
    // }
    data1.push(layup, FirstEL, Framing, Sorting, Packing)
  })
  column.changeData(dataWithData2(data1))
})

let FIRST_AMOUNT = 0;
let SECOND_AMOUNT = 0;
let THIRD_AMOUNT = 0;

if ("line2" === props.chartName) {
  FIRST_AMOUNT = 800;
  SECOND_AMOUNT = 800;
  THIRD_AMOUNT = 300;
}
if ("line1" === props.chartName) {
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

let dataWithData2 = (data1) => {
  const data2 = data1.filter(item => (item.amount <= dict[item.shift])).map(item => ({
    ...item,
    amount: dict[item.shift] - item.amount,
    type: 'to target',
  }));

  const data = [...data2, ...data1]
  return data;
}

// console.log(data)

onMounted(() => {
  column = new Column("line1DailyThursday" + props.chartName, {
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
    color: ['#fd1e5a', '#00ae9d', '#000000'],
  });
  column.render();
  // console.log("onMount")
})

</script>

<template>
  <a-typography-text code>产量(焊机,层压,装框,分档,打包) Daily Output(Stringer,Lamination,Framing,Sorting,Packing)</a-typography-text>
  <div :id="'line1DailyThursday'+ props.chartName " :style="{height:'200px'}"/>
</template>


<style scoped>

</style>