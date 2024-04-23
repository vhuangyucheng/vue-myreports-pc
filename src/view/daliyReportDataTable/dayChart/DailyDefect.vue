<script setup>
import {toRefs, defineProps} from 'vue'

const props = defineProps(['dataFromPa', 'chartName'])

let dataList = ref([])

watch(() => props.dataFromPa, (newVal, oldVal) => {
  console.log('new', newVal)
  // newVal.forEach(item => {
  //   console.log(item.shiftId)
  // })
  dataList.value = newVal
})

const dateConvertor = (date) => {
  switch (date % 10) {
    case 1:
      return "Day"
    case 2:
      return "Night"
    case 3:
      return "NN"
  }
}

const PercentageConvertor = (station) => {
  switch (station) {
    case "line2Stringer":
      return 99.7
    case "line2EL":
      return 93
    case "line1Stringer":
      return 99.5
    case "line1EL":
      return 90
    case "line1Onepass":
      return 87.06
    case "line2Onepass":
      return 90.14
  }
}
</script>

<template>

  <table class="tg">
    <thead>
    <tr>
      <th class="tg-1d2w" colspan="11">质量目标达成情况<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality Target Achievement</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="tg-choe">数据日期<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data Date</td>
      <td class="tg-choe">电池片合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cell Yeild Rate</td>
      <td class="tg-choe">电池串合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String Yeild Rate</td>
      <td class="tg-choe">层前EL合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EL Before Lamination Yeild Rate</td>
      <td class="tg-choe">层压合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lamination Yeild Rate</td>
      <td class="tg-choe">层压后外观检Appearance&nbsp;&nbsp;&nbsp;inspection after lamination</td>
      <td class="tg-choe">组框合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Framming Yeild Rate</td>
      <td class="tg-choe">接线盒合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Junction Box Yeild Rate</td>
      <td class="tg-jc84">功率测试合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IV Test Yeild Rate</td>
      <td class="tg-jc84">终检合格率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Final Inspection Yeild Rate</td>
      <td class="tg-jc84">一次通过率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One Time Pass Rate</td>
    </tr>
    <tr>
      <td class="tg-lg43">目标值<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Target</td>
      <td class="tg-h8pl">{{ PercentageConvertor(chartName+"Stringer") }}%</td>
      <td class="tg-h8pl">98.00%</td>
      <td class="tg-h8pl">{{ PercentageConvertor(chartName+"EL") }}%</td>
      <td class="tg-h8pl">100.00%</td>
      <td class="tg-h8pl">99.80%</td>
      <td class="tg-h8pl">100.00%</td>
      <td class="tg-h8pl">99.80%</td>
      <td class="tg-fyjm">99.80%</td>
      <td class="tg-fyjm">99.80%</td>
      <td class="tg-fyjm">{{ PercentageConvertor(chartName+"Onepass") }}%</td>
    </tr>
    <tr v-for="(item, index) in dataList" :key="index">
      <td class="tg-f4yw"> {{ dateConvertor(item.shiftId) }}</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: (100-((((item.stringerScrap + item.repairScrap + item.incidentScrap + item.incomingScrap) / item.cellsInput) * 100).toFixed(2))) < PercentageConvertor(chartName+'Stringer') ? '#fd1e5a' : '#00ae9d' }"
      > {{ 100-((((item.stringerScrap + item.repairScrap + item.incidentScrap + item.incomingScrap) / item.cellsInput) * 100).toFixed(2)) }}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor:  Number((((item.stringer1Output + item.stringer2Output + item.stringer3Output) / (item.stringer1Output + item.stringer2Output + item.stringer3Output + item.stringer1Miswelding + item.stringer1Overwelding + item.stringer1Split + item.stringer1Crack + item.stringer1Others + item.stringer2Miswelding + item.stringer2Overwelding + item.stringer2Split + item.stringer2Crack + item.stringer2Others + item.stringer3Miswelding + item.stringer3Overwelding + item.stringer3Split + item.stringer3Crack + item.stringer3Others)) * 100).toFixed(2)) < 98 ? '#fd1e5a' : '#00ae9d' }"
      >{{  Number((((item.stringer1Output + item.stringer2Output + item.stringer3Output) / (item.stringer1Output + item.stringer2Output + item.stringer3Output + item.stringer1Miswelding + item.stringer1Overwelding + item.stringer1Split + item.stringer1Crack + item.stringer1Others + item.stringer2Miswelding + item.stringer2Overwelding + item.stringer2Split + item.stringer2Crack + item.stringer2Others + item.stringer3Miswelding + item.stringer3Overwelding + item.stringer3Split + item.stringer3Crack + item.stringer3Others)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.firstel2Defect / item.firstel2Output)) * 100).toFixed(2)) < PercentageConvertor(chartName+'EL') ? '#fd1e5a' : '#00ae9d' }"
      >{{Number(((1 - (item.firstel2Defect / item.firstel2Output)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.laminationDefect / item.laminator1Output)) * 100).toFixed(2)) < 100 ? '#fd1e5a' : '#00ae9d' }"
      >{{Number(((1 - (item.laminationDefect / item.laminator1Output)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.appearanceInspection / item.framingOutput)) * 100).toFixed(2)) < 99.8 ? '#fd1e5a' : '#00ae9d' }"
      >{{Number(((1 - (item.appearanceInspection / item.framingOutput)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.framingScrap / item.framingOutput)) * 100).toFixed(2)) < 100 ? '#fd1e5a' : '#00ae9d' }"
      >{{Number(((1 - (item.framingScrap / item.framingOutput)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.junctionboxDefect / item.framingOutput)) * 100).toFixed(2)) < 99.8 ? '#fd1e5a' : '#00ae9d' }"
      >{{Number(((1 - (item.junctionboxDefect / item.framingOutput)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.ivDefect / item.secondelOutput)) * 100).toFixed(2)) < 99.8 ? '#fd1e5a' : '#00ae9d' }"
      >{{ Number(((1 - (item.ivDefect / item.secondelOutput)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: Number(((1 - (item.secondelDefect / item.secondelOutput)) * 100).toFixed(2)) < 99.8 ? '#fd1e5a' : '#00ae9d' }"
      >{{Number(((1 - (item.secondelDefect / item.secondelOutput)) * 100).toFixed(2))}}%</td>
      <td class="tg-nrix"
          :style="{ backgroundColor: (((100-((((item.stringerScrap + item.repairScrap + item.incidentScrap + item.incomingScrap) / item.cellsInput) * 100).toFixed(2)))
          * (Number((((item.stringer1Output + item.stringer2Output + item.stringer3Output) / (item.stringer1Output + item.stringer2Output + item.stringer3Output + item.stringer1Miswelding + item.stringer1Overwelding + item.stringer1Split + item.stringer1Crack + item.stringer1Others + item.stringer2Miswelding + item.stringer2Overwelding + item.stringer2Split + item.stringer2Crack + item.stringer2Others + item.stringer3Miswelding + item.stringer3Overwelding + item.stringer3Split + item.stringer3Crack + item.stringer3Others)) * 100).toFixed(2)))
          * (Number(((1 - (item.firstel2Defect / item.firstel2Output)) * 100).toFixed(2)))
          * (Number(((1 - (item.laminationDefect / item.laminator1Output)) * 100).toFixed(2)))
          * (Number(((1 - (item.appearanceInspection / item.framingOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.framingScrap / item.framingOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.junctionboxDefect / item.framingOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.ivDefect / item.secondelOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.secondelDefect / item.secondelOutput)) * 100).toFixed(2)))
          * 0.000001 * 0.000001 * 0.0001).toFixed(2)) < PercentageConvertor(chartName+'Onepass') ? '#fd1e5a' : '#00ae9d' }"
      >{{
          (((100-((((item.stringerScrap + item.repairScrap + item.incidentScrap + item.incomingScrap) / item.cellsInput) * 100).toFixed(2)))
          * (Number((((item.stringer1Output + item.stringer2Output + item.stringer3Output) / (item.stringer1Output + item.stringer2Output + item.stringer3Output + item.stringer1Miswelding + item.stringer1Overwelding + item.stringer1Split + item.stringer1Crack + item.stringer1Others + item.stringer2Miswelding + item.stringer2Overwelding + item.stringer2Split + item.stringer2Crack + item.stringer2Others + item.stringer3Miswelding + item.stringer3Overwelding + item.stringer3Split + item.stringer3Crack + item.stringer3Others)) * 100).toFixed(2)))
          * (Number(((1 - (item.firstel2Defect / item.firstel2Output)) * 100).toFixed(2)))
          * (Number(((1 - (item.laminationDefect / item.laminator1Output)) * 100).toFixed(2)))
          * (Number(((1 - (item.appearanceInspection / item.framingOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.framingScrap / item.framingOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.junctionboxDefect / item.framingOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.ivDefect / item.secondelOutput)) * 100).toFixed(2)))
          * (Number(((1 - (item.secondelDefect / item.secondelOutput)) * 100).toFixed(2)))
          * 0.000001 * 0.000001 * 0.0001).toFixed(2))
        }}%</td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>
.tg  {border-collapse:collapse;border-color:#bbb;border-spacing:0;border-style:solid;border-width:1px;}
.tg td{background-color:#E0FFEB;border-color:#bbb;border-style:solid;border-width:0px;color:#594F4F;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#9DE0AD;border-color:#bbb;border-style:solid;border-width:0px;color:#493F3F;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-jc84{background-color:#DAEEF3;text-align:center;vertical-align:middle}
.tg .tg-lg43{background-color: #aeb0b2;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-1d2w{background-color:#FFF;border-color:#000000;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-choe{background-color:#DAEEF3;border-color:inherit;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-f4yw{background-color:#FFF;text-align:center;vertical-align:middle}
.tg .tg-nrix{background-color: #ffffff;text-align:center;vertical-align:middle}
</style>