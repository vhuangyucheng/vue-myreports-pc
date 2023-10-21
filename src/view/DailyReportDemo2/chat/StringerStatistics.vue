<script setup>
import axios from "axios";

let autoRuntTimeAStringer1 = ref(0.0)
let autoRuntTimeAStringer2 = ref(0.0)
let autoRuntTimeAStringer3 = ref(0.0)
let autoRuntTimeBStringer1 = ref(0.0)
let autoRuntTimeBStringer2 = ref(0.0)
let autoRuntTimeBStringer3 = ref(0.0)
let pauseTimeAStringer1 = ref(0.0)
let pauseTimeAStringer2 = ref(0.0)
let pauseTimeAStringer3 = ref(0.0)
let pauseTimeBStringer1 = ref(0.0)
let pauseTimeBStringer2 = ref(0.0)
let pauseTimeBStringer3 = ref(0.0)
let errorTimeAStringer1 = ref(0.0)
let errorTimeAStringer2 = ref(0.0)
let errorTimeAStringer3 = ref(0.0)
let errorTimeBStringer1 = ref(0.0)
let errorTimeBStringer2 = ref(0.0)
let errorTimeBStringer3 = ref(0.0)
let lackTimeAStringer1 = ref(0.0)
let lackTimeAStringer2 = ref(0.0)
let lackTimeAStringer3 = ref(0.0)
let lackTimeBStringer1 = ref(0.0)
let lackTimeBStringer2 = ref(0.0)
let lackTimeBStringer3 = ref(0.0)
let manualRunTimeAStringer1 = ref(0.0)
let manualRunTimeAStringer2 = ref(0.0)
let manualRunTimeAStringer3 = ref(0.0)
let manualRunTimeBStringer1 = ref(0.0)
let manualRunTimeBStringer2 = ref(0.0)
let manualRunTimeBStringer3 = ref(0.0)
let blockTimeAStringer1 = ref(0.0)
let blockTimeAStringer2 = ref(0.0)
let blockTimeAStringer3 = ref(0.0)
let blockTimeBStringer1 = ref(0.0)
let blockTimeBStringer2 = ref(0.0)
let blockTimeBStringer3 = ref(0.0)


function axiosCall() {
  axios({
    url: "/apiStringer/stringer/getString",
    method: "POST",
    data: {},
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    console.log(response.data)
    autoRuntTimeAStringer1.value = response.data.stringer21.shift1.autoRunTimeA
    autoRuntTimeAStringer2.value = response.data.stringer22.shift1.autoRunTimeA
    autoRuntTimeAStringer3.value = response.data.stringer23.shift1.autoRunTimeA
    autoRuntTimeBStringer1.value = response.data.stringer21.shift1.autoRunTimeB
    autoRuntTimeBStringer2.value = response.data.stringer22.shift1.autoRunTimeB
    autoRuntTimeBStringer3.value = response.data.stringer23.shift1.autoRunTimeB
    pauseTimeAStringer1.value  = response.data.stringer21.shift1.pauseTimeA
    pauseTimeAStringer2.value  = response.data.stringer22.shift1.pauseTimeA
    pauseTimeAStringer3.value  = response.data.stringer23.shift1.pauseTimeA
    pauseTimeBStringer1.value  = response.data.stringer21.shift1.pauseTimeB
    pauseTimeBStringer2.value  = response.data.stringer22.shift1.pauseTimeB
    pauseTimeBStringer3.value  = response.data.stringer23.shift1.pauseTimeB
    errorTimeAStringer1.value  = response.data.stringer21.shift1.errorTImeA
    errorTimeAStringer2.value  = response.data.stringer22.shift1.errorTImeA
    errorTimeAStringer3.value  = response.data.stringer23.shift1.errorTImeA
    errorTimeBStringer1.value  = response.data.stringer21.shift1.errorTImeB
    errorTimeBStringer2.value  = response.data.stringer22.shift1.errorTImeB
    errorTimeBStringer3.value  = response.data.stringer23.shift1.errorTImeB
    lackTimeAStringer1.value  = response.data.stringer21.shift1.lackTimeA
    lackTimeAStringer2.value  = response.data.stringer22.shift1.lackTimeA
    lackTimeAStringer3.value  = response.data.stringer23.shift1.lackTimeA
    lackTimeBStringer1.value  = response.data.stringer21.shift1.lackTimeB
    lackTimeBStringer2.value  = response.data.stringer22.shift1.lackTimeB
    lackTimeBStringer3.value  = response.data.stringer23.shift1.lackTimeB
    manualRunTimeAStringer1.value  = response.data.stringer21.shift1.manualRunTimeA
    manualRunTimeAStringer2.value  = response.data.stringer22.shift1.manualRunTimeA
    manualRunTimeAStringer3.value  = response.data.stringer23.shift1.manualRunTimeA
    manualRunTimeBStringer1.value  = response.data.stringer21.shift1.manualRunTimeB
    manualRunTimeBStringer2.value  = response.data.stringer22.shift1.manualRunTimeB
    manualRunTimeBStringer3.value  = response.data.stringer23.shift1.manualRunTimeB
    blockTimeAStringer1.value  = response.data.stringer21.shift1.blockTimeA
    blockTimeAStringer2.value  = response.data.stringer22.shift1.blockTimeA
    blockTimeAStringer3.value  = response.data.stringer23.shift1.blockTimeA
    blockTimeBStringer1.value  = response.data.stringer21.shift1.blockTimeB
    blockTimeBStringer2.value  = response.data.stringer22.shift1.blockTimeB
    blockTimeBStringer3.value  = response.data.stringer23.shift1.blockTimeB
  })
}

axiosCall();
setInterval(axiosCall, 1000 * 60 * 5);
</script>

<template>
  <div>Stringer Downtime Matrix(minutes) 串焊机宕机时间统计(分钟)</div>
  <table class="tg">
    <thead>
    <tr>
      <th class="tg-kvxc"></th>
      <th class="tg-za14">stringer#1</th>
      <th class="tg-za14">stringer#2</th>
      <th class="tg-za14">stringer#3</th>
      <th class="tg-7zrl"></th>
      <th class="tg-7zrl">stringer#1</th>
      <th class="tg-7zrl">stringer#2</th>
      <th class="tg-7zrl">stringer#3</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="tg-za14">A线自动运行时间</td>
      <td class="tg-za14">{{autoRuntTimeAStringer1}}</td>
      <td class="tg-za14">{{autoRuntTimeAStringer2}}</td>
      <td class="tg-za14">{{autoRuntTimeAStringer3}}</td>
      <td class="tg-7zrl">B线自动运行时间</td>
      <td class="tg-7zrl">{{autoRuntTimeBStringer1}}</td>
      <td class="tg-7zrl">{{autoRuntTimeBStringer2}}</td>
      <td class="tg-7zrl">{{autoRuntTimeBStringer3}}</td>
    </tr>
    <tr>
      <td class="tg-za14">A-Auto Run Time</td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-7zrl">B-Auto Run Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
    </tr>
    <tr>
      <td class="tg-za14">A线自动暂停时间</td>
      <td class="tg-za14">{{pauseTimeAStringer1}}</td>
      <td class="tg-za14">{{pauseTimeAStringer2}}</td>
      <td class="tg-za14">{{pauseTimeAStringer3}}</td>
      <td class="tg-7zrl">B线自动暂停时间</td>
      <td class="tg-7zrl">{{pauseTimeBStringer1}}</td>
      <td class="tg-7zrl">{{pauseTimeBStringer2}}</td>
      <td class="tg-7zrl">{{pauseTimeBStringer3}}</td>
    </tr>
    <tr>
      <td class="tg-za14">A-Auto Pause Time</td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-7zrl">B-Auto Pause Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
    </tr>
    <tr>
      <td class="tg-za14">A线故障时间</td>
      <td class="tg-za14">{{errorTimeAStringer1}}</td>
      <td class="tg-za14">{{errorTimeAStringer2}}</td>
      <td class="tg-za14">{{errorTimeAStringer3}}</td>
      <td class="tg-7zrl">B线故障时间</td>
      <td class="tg-7zrl">{{errorTimeBStringer1}}</td>
      <td class="tg-7zrl">{{errorTimeBStringer2}}</td>
      <td class="tg-7zrl">{{errorTimeBStringer3}}</td>
    </tr>
    <tr>
      <td class="tg-za14">A-Down Time</td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-7zrl">B-Down Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
    </tr>
    <tr>
      <td class="tg-za14">A线缺料时间</td>
      <td class="tg-za14">{{lackTimeAStringer1}}</td>
      <td class="tg-za14">{{lackTimeAStringer2}}</td>
      <td class="tg-za14">{{lackTimeAStringer3}}</td>
      <td class="tg-7zrl">B线缺料时间</td>
      <td class="tg-7zrl">{{lackTimeBStringer1}}</td>
      <td class="tg-7zrl">{{lackTimeBStringer2}}</td>
      <td class="tg-7zrl">{{lackTimeBStringer3}}</td>
    </tr>
    <tr>
      <td class="tg-za14">A-Cell Shortage Time</td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-7zrl">B-Cell Shortage Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
    </tr>
    <tr>
      <td class="tg-za14">A线手动运行时间</td>
      <td class="tg-za14">{{manualRunTimeAStringer1}}</td>
      <td class="tg-za14">{{manualRunTimeAStringer2}}</td>
      <td class="tg-za14">{{manualRunTimeAStringer3}}</td>
      <td class="tg-7zrl">B线手动运行时间</td>
      <td class="tg-7zrl">{{manualRunTimeBStringer1}}</td>
      <td class="tg-7zrl">{{manualRunTimeBStringer2}}</td>
      <td class="tg-7zrl">{{manualRunTimeBStringer3}}</td>
    </tr>
    <tr>
      <td class="tg-za14">A-Manual Run Time</td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-za14"></td>
      <td class="tg-7zrl">B-Manual Run Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
    </tr>
    <tr>
      <td class="tg-za14">A线堵料计时</td>
      <td class="tg-za14">{{blockTimeAStringer1}}</td>
      <td class="tg-za14">{{blockTimeAStringer2}}</td>
      <td class="tg-za14">{{blockTimeAStringer3}}</td>
      <td class="tg-7zrl">B线堵料计时</td>
      <td class="tg-7zrl">{{blockTimeBStringer1}}</td>
      <td class="tg-7zrl">{{blockTimeBStringer2}}</td>
      <td class="tg-7zrl">{{blockTimeBStringer3}}</td>
    </tr>
    <tr>
      <td class="tg-7zrl">String Jam Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl">String Jam Time</td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
      <td class="tg-7zrl"></td>
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

.tg .tg-kvxc {
  border-color: #000000;
  text-align: left;
  vertical-align: bottom
}

.tg .tg-za14 {
  border-color: inherit;
  text-align: left;
  vertical-align: bottom
}

.tg .tg-7zrl {
  text-align: left;
  vertical-align: bottom
}
</style>