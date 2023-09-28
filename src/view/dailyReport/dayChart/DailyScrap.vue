<script setup>
import {Column} from '@antv/g2plot';
import {toRefs, defineProps} from 'vue'
const props = defineProps(['dataFromPa', 'chartName'])

const data = [
  {
    name: '来料破片',
    shiftValue: 'Day',
    amount: 45,
  },
  {
    name: '返修串破片',
    shiftValue: 'Day',
    amount: 88,
  },
  {
    name: '焊机破片',
    shiftValue: 'Day',
    amount: 5,
  },
  {
    name: '过焊',
    shiftValue: 'Day',
    amount: 2,
  },
  {
    name: '组件破片',
    shiftValue: 'Night',
    amount: 0,
  },
  {
    name: '返修串破片',
    shiftValue: 'Night',
    amount: 0,
  },
  {
    name: '焊机破片',
    shiftValue: 'Night',
    amount: 0,
  },
  {
    name: '焊机破片',
    shiftValue: 'Night',
    amount: 0,
  },
];

let data1;
let dayAmount = ref(0);
let nightAmount = ref(0);
let nnAmount = ref(0);

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
        dayAmount.value = (item.incomingScrap) + (item.stringerScrap) +(item.repairScrap)+ (item.incidentScrap)
        break;
      case 2:
        shiftValue = "Night"
        nightAmount.value = (item.incomingScrap) + (item.stringerScrap) +(item.repairScrap)+ (item.incidentScrap)
        break;
      case 3:
        shiftValue = "NN"
        nnAmount.value = (item.incomingScrap) + (item.stringerScrap) +(item.repairScrap)+ (item.incidentScrap)
        break;
    }
    let incomingScrap = {
      shift: shiftValue,
      amount: (item.incomingScrap) + (item.stringerScrap) +(item.repairScrap)+ (item.incidentScrap),
      name: "报废数量ScrapAmount"
    }

    data1.push(incomingScrap)
  })
  // console.log(data1)
  stackedColumnPlot.changeData(data1)
})

let stackedColumnPlot ;

onMounted(() => {
  stackedColumnPlot = new Column('line1DailyThursdayScrap'+props.chartName, {
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
    <a-typography-text code>电池片报废Cells Scrap : Day = {{ dayAmount }} ,  Night = {{ nightAmount }} , NN = {{nnAmount}}</a-typography-text>
    <div :id="'line1DailyThursdayScrap'+props.chartName " :style="{height:'180px'}" />
  </div>
</template>


<style scoped>

</style>