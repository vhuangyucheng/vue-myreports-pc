<script setup>
import {Column} from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'

const props = defineProps(['dataFromPa', 'chartName'])

import getImprovementList from '../../../store/getImprovementList';

const getImprovementListStore = getImprovementList();


const data = [];

let data1;
let dayAmount = ref(0);
let dayPercentage = ref(0.0);
let nightAmount = ref(0);
let nightPercentage = ref(0.0);
let nnAmount = ref(0);
let nnPercentage = ref(0.0);

watch(() => props.dataFromPa, (newVal, oldVal) => {
  // console.log('2监听引用类型数据dataList')
  // console.log('new', newVal)
  // console.log('old', oldVal)
  dayAmount.value = 0;
  nightAmount.value = 0;
  nnAmount.value = 0;
  data1 = [];
  let shiftValue = "";
  newVal.forEach(item => {
    switch (item.shiftId % 10) {
      case 1:
        shiftValue = "Day"
        dayAmount.value = (item.incomingScrap) + (item.stringerScrap) + (item.repairScrap) + (item.incidentScrap)
        break;
      case 2:
        shiftValue = "Night"
        nightAmount.value = (item.incomingScrap) + (item.stringerScrap) + (item.repairScrap) + (item.incidentScrap)
        break;
      case 3:
        shiftValue = "NN"
        nnAmount.value = (item.incomingScrap) + (item.stringerScrap) + (item.repairScrap) + (item.incidentScrap)
        break;
    }
    // let incomingScrap = {
    //   shift: shiftValue,
    //   amount: (item.incomingScrap) + (item.stringerScrap) +(item.repairScrap)+ (item.incidentScrap),
    //   name: "报废数量ScrapAmount"
    // }
    let incomingScrap = {
      shift: shiftValue,
      amount: (item.incomingScrap),
      name: "来料报废incomingScrap"
    }
    let stringerScrap = {
      shift: shiftValue,
      amount: (item.stringerScrap),
      name: "焊机报废stringerScrap"
    }
    let repairScrap = {
      shift: shiftValue,
      amount: (item.repairScrap),
      name: "返修报废repairScrap"
    }
    let incidentScrap = {
      shift: shiftValue,
      amount: (item.incidentScrap),
      name: "事故报废incidentScrap"
    }

    data1.push(incomingScrap, stringerScrap, repairScrap, incidentScrap)

    const cellsYieldRate = Number(((item.cellsInput - (item.incomingScrap) - (item.stringerScrap) - (item.repairScrap) - (item.incidentScrap)) / item.cellsInput)*100).toFixed(2)
    //加入improvement list
    if (props.chartName === "line1") {
      if (cellsYieldRate < 99.5) {
        getImprovementListStore.line1ImprovementListPush(shiftValue + " shift Cells consumption Yield Rate : " + cellsYieldRate + "% not up to " + "99.5%");
      }
    } else if (props.chartName === "line2") {
      if (cellsYieldRate < 99.5) {
        getImprovementListStore.line2ImprovementListPush(shiftValue + " shift Cells consumption Yield Rate : " + cellsYieldRate + "% not up to " + "99.5%");
      }
    }
  })
  // console.log(data1)
  stackedColumnPlot.changeData(data1)
})

let stackedColumnPlot;

onMounted(() => {
  stackedColumnPlot = new Column('line1DailyThursdayScrap' + props.chartName, {
    data: data,
    isGroup: true,
    xField: 'shift',
    yField: 'amount',
    seriesField: 'name',
    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],
    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'bottom', // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // 数据标签防遮挡
        {type: 'interval-hide-overlap'},
        // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },

  });

  stackedColumnPlot.render();

})


</script>

<template>
  <div>
    <a-typography-text code>电池片报废Cells Scrap : Day = {{ dayAmount }} , Night = {{ nightAmount }} , NN =
      {{ nnAmount }}
    </a-typography-text>
    <div :id="'line1DailyThursdayScrap'+props.chartName " :style="{height:'180px'}"/>
  </div>
</template>


<style scoped>

</style>