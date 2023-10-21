<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";
import StringerOutput from "./chat/StringerOutput.vue";
import DefectChart02 from "./chat/DefectChart02.vue";
import DefectChart03 from "./chat/DefectChart03.vue";
import {values} from "@antv/util";

// let date = ref();
// let currentTime = new Date();
// const time1 = new Date(); // Replace with your desired time
// time1.setHours(0);       // Set the hours
// time1.setMinutes(0);    // Set the minutes
// const time2 = new Date(); // Replace with your desired time
// time2.setHours(6);      // Set the hours
// time2.setMinutes(45);     // Set the minutes
// if (currentTime <= time2 && currentTime >= time1) {
//   currentTime = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);
// }
// date.value = currentTime.getFullYear() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getDate()

import getDate from '../../store/getDate';
import StringerStatistics from "./chat/StringerStatistics.vue";
const getDateStore = getDate();
console.log(getDateStore.getCurrentDay)
</script>


<template>
  <!--  <a-row>-->
  <!--    <a-col :span="17" :offset="4">-->
  <!--      <div :style="{fontSize:'57px'}">06/07/2023 Wednesday Productivity</div>-->
  <!--    </a-col>-->
  <!--  </a-row>-->
  <a-row>
    <a-col :span="12">
      <div>{{ getDateStore.getCurrentDay }} : Floor productivity 二线各个工作站生产力（排版机, 前道EL, 装框, 分档)</div>
      <div>
        <OutputChat1 :style="{height:'300px'}"/>
      </div>
    </a-col>
    <a-col :span="12">
      <ELDefectChat01/>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="12">
      <div>{{ getDateStore.getCurrentDay }} : Stringer productivity(A/B side) 串焊机生产力(包含A侧B侧）</div>
      <div>
        <StringerOutput/>
      </div>
    </a-col>
    <a-col :span="12">
      <StringerStatistics/>
    </a-col>
  </a-row>


</template>


<style scoped>

</style>