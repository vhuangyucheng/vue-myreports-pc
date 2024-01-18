<script setup>
import {Column} from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'
import {onLongPress} from "@vueuse/core";

import getImprovementList from '../../../store/getImprovementList';

const getImprovementListStore = getImprovementList();


const props = defineProps(['dataFromPa', 'chartName'])

const data = [];

let data1;

watch(() => props.dataFromPa, (newVal, oldVal) => {
  // console.log('2监听引用类型数据dataList')
  console.log('new', newVal)
  // console.log('old', oldVal)
  data1 = [];
  let shiftValue = "";
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

    let stringerDefectAmount = Number((((item.stringer1Output + item.stringer2Output + item.stringer3Output) / (item.stringer1Output + item.stringer2Output + item.stringer3Output + item.stringer1Miswelding + item.stringer1Overwelding + item.stringer1Split + item.stringer1Crack + item.stringer1Others + item.stringer2Miswelding + item.stringer2Overwelding + item.stringer2Split + item.stringer2Crack + item.stringer2Others + item.stringer3Miswelding + item.stringer3Overwelding + item.stringer3Split + item.stringer3Crack + item.stringer3Others)) * 100).toFixed(2))
    let firstelDefectAmount = Number(((1 - (item.firstel2Defect / item.firstel2Output)) * 100).toFixed(2))
    let finishedgoodDefectAmount = Number((((item.secondelOutput - item.finishedgoodScrap - item.finishedgoodDegrade) / item.secondelOutput) * 100).toFixed(2))

    //加入improvement list
    if(props.chartName === "line1"){
      if (stringerDefectAmount < 98) {
        getImprovementListStore.line1ImprovementListPush(shiftValue + " shift stringer Yield Rate : " + stringerDefectAmount + "% not up to " + "98%");
      }
      if (firstelDefectAmount < 90) {
        getImprovementListStore.line1ImprovementListPush(shiftValue + " shift FirstEL Yield Rate : " + firstelDefectAmount + "% not up to " + "90%");
      }
      if (finishedgoodDefectAmount < 99.8) {
        getImprovementListStore.line1ImprovementListPush(shiftValue + " shift FinishedGoods Yield Rate : " + finishedgoodDefectAmount + "% not up to " + "99.8%");
      }
    } else if(props.chartName === "line2"){
      if (stringerDefectAmount < 98) {
        getImprovementListStore.line2ImprovementListPush(shiftValue + " shift stringer Yield Rate : " + stringerDefectAmount + "% not up to " + "98%");
      }
      if (firstelDefectAmount < 90) {
        getImprovementListStore.line2ImprovementListPush(shiftValue + " shift FirstEL Yield Rate : " + firstelDefectAmount + "% not up to " + "90%");
      }
      if (finishedgoodDefectAmount < 99.8) {
        getImprovementListStore.line2ImprovementListPush(shiftValue + " shift FinishedGoods Yield Rate : " + finishedgoodDefectAmount + "% not up to " + "99.8%");
      }
    }


    let firstelDefect = {
      shift: shiftValue,
      amount: firstelDefectAmount,
      name: '前道EL/FirstEL'
    }
    let finishedgoodDefect = {
      shift: shiftValue,
      amount: finishedgoodDefectAmount,
      name: '成品/Finished Goods'
    }
    let stringerDefect = {
      shift: shiftValue,
      amount: stringerDefectAmount,
      name: '焊机/Stringer'
    }
    data1.push(stringerDefect, firstelDefect, finishedgoodDefect,)
  })
  // console.log(data1)
  stackedColumnPlot.changeData(data1)
})

let stackedColumnPlot;

onMounted(() => {
  stackedColumnPlot = new Column('dailyOutputDailyDefect' + props.chartName, {
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
    <a-typography-text code>良率 百分比 Yield Rate Percentage</a-typography-text>
    <div :id="'dailyOutputDailyDefect'+props.chartName " :style="{height:'180px'}"/>
  </div>
</template>


<style scoped>

</style>