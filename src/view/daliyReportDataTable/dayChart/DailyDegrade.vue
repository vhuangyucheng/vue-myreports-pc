<script setup>
import {Column} from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'
const props = defineProps(['dataFromPa', 'chartName'])

const data = [

];

let data1;

watch(() => props.dataFromPa, (newVal, oldVal) => {
  // console.log('2监听引用类型数据dataList')
  // console.log('new', newVal)
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

    let finishedgoodDegrade = {
      shift: shiftValue,
      amount: Number(item.finishedgoodDegrade),
      name: '降级Degrade'
    }
    let finishedgoodScrap = {
      shift: shiftValue,
      amount: Number(item.finishedgoodScrap),
      name: '报废Scrap'
    }
    data1.push(finishedgoodDegrade,finishedgoodScrap)
  })
  // console.log(data1)
  stackedColumnPlot.changeData(data1)
})

let stackedColumnPlot ;

onMounted(() => {
  stackedColumnPlot = new Column('dailyOutputDailyDegrade'+props.chartName, {
    data: data,
    isGroup: true,
    xField: 'shift',
    yField: 'amount',
    seriesField: 'name',
    /** 设置颜色 */
    color: ['#f88c24', '#fd1e5a'],
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
    <a-typography-text code>成品降级/ 报废 Finished Goods Downgrade/ Scrap</a-typography-text>
    <div :id="'dailyOutputDailyDegrade'+props.chartName " :style="{height:'180px'}" />
  </div>
</template>


<style scoped>

</style>