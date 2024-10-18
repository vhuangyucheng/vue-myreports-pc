<script setup>
import {toRefs, defineProps} from 'vue'

const props = defineProps(['dataFromPa', 'chartName'])

let dataList = ref([])

watch(() => props.dataFromPa, (newVal, oldVal) => {
  // console.log('new', newVal)
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
</script>

<template>
  <table class="tg">
    <thead>
    <tr>
      <th class="tg-grda" colspan="8">(层压前)电池片损耗率<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cell Loss Rate (before lamination)</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="tg-choe">日期<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date</td>
      <td class="tg-choe">投入总片数<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Input Cell</td>
      <td class="tg-choe">焊机工损片数<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stringer Process Loss</td>
      <td class="tg-choe">返修工损片数<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair Process Loss</td>
      <td class="tg-choe">原材损耗片数<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Material Loss</td>
      <td class="tg-choe">总损耗片数<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Loss</td>
      <td class="tg-choe">工损损耗<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Process Loss Rate<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（制程
        目标值Target0.2%）
      </td>
      <td class="tg-choe">原材损耗<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Material Loss Rate<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（来料
        目标值Target0.3%）
      </td>
      <td class="tg-choe">总损耗<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Loss Rate<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（目标值Target0.5%）
      </td>
    </tr>

    <tr v-for="(item, index) in dataList" :key="index">
      <td class="tg-f4yw"> {{ dateConvertor(item.shiftId) }}</td>
      <td class="tg-vxga">{{ item.cellsInput }}</td>
      <td class="tg-vxga">{{ item.stringerScrap   }}</td>
      <td class="tg-vxga">{{ item.repairScrap  }}</td>
      <td class="tg-vxga">{{ item.incomingScrap }}</td>
      <td class="tg-vxga">{{ item.stringerScrap + item.repairScrap  + item.incomingScrap }}</td>
      <td class="tg-vxga"
          :style="{ backgroundColor: (((item.stringerScrap + item.repairScrap )/item.cellsInput).toFixed(4)*100).toFixed(2) >0.2 ? '#fd1e5a' : '#00ae9d', color: 'white' }"
      >
        {{ (((item.stringerScrap + item.repairScrap ) / item.cellsInput).toFixed(4) * 100).toFixed(2) }}%
        ( {{ (((item.stringerScrap  ) / item.cellsInput).toFixed(4) * 100).toFixed(2) }}% +
        {{ (((item.repairScrap ) / item.cellsInput).toFixed(4) * 100).toFixed(2) }}%)
      </td>
      <td class="tg-vxga"
          :style="{ backgroundColor: (((item.incomingScrap) / item.cellsInput).toFixed(4) * 100).toFixed(2) >0.3 ? '#fd1e5a' : '#00ae9d', color: 'white' }"
      >{{ (((item.incomingScrap) / item.cellsInput).toFixed(4) * 100).toFixed(2) }}%</td>
      <td class="tg-vxga"
          :style="{ backgroundColor: ((((item.stringerScrap + item.repairScrap  + item.incomingScrap) / item.cellsInput) * 100).toFixed(2)) >0.5 ? '#fd1e5a' : '#00ae9d', color: 'white' }">
        {{ (((item.stringerScrap + item.repairScrap  + item.incomingScrap) / item.cellsInput) * 100).toFixed(2) }}%
      </td>
    </tr>

    </tbody>
  </table>
</template>


<style scoped>
.tg {
  border-collapse: collapse;
  border-color: #bbb;
  border-spacing: 0;
  border-style: solid;
  border-width: 1px;
}

.tg td {
  background-color: #E0FFEB;
  border-color: #bbb;
  border-style: solid;
  border-width: 0px;
  color: #594F4F;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}

.tg th {
  background-color: #9DE0AD;
  border-color: #bbb;
  border-style: solid;
  border-width: 0px;
  color: #493F3F;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}

.tg .tg-vxga {
  background-color: #ffffff;
  text-align: center;
  vertical-align: middle
}

.tg .tg-grda {
  background-color: #FFF;
  border-color: #000000;
  font-weight: bold;
  text-align: center;
  vertical-align: bottom
}

.tg .tg-choe {
  background-color: #DAEEF3;
  border-color: inherit;
  font-weight: bold;
  text-align: center;
  vertical-align: middle
}

.tg .tg-f4yw {
  background-color: #FFF;
  text-align: center;
  vertical-align: middle
}
</style>