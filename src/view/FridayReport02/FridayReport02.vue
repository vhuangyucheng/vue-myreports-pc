<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";
</script>


<template>
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'53px'}">06/08/2023 Thursday Productivity</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="10" :offset="4">
      <OutputChat1/>
    </a-col>
    <a-col :span="10">
      input: 2线早班贴条码：550W
      <br/>
      SCE2230002931P2F0
      <br/>
      SCE2230003308P2F0
      <br/>
      共378件
      <br/>
      finished goods: 288
      <br/>
      input: 2线晚班贴条码：550W
      <br/>
      SCF2230003309P2F0
      <br/>
      SCF2230003585P2F0
      <br/>
      共277件
      <br/>
      finished goods: 281
      <br/>
      input: 2线深夜班贴条码：550W
      <br/>

      <br/>
      finished goods: 314
      <br/>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="18" :offset="3">
      <div :style="{fontSize:'53px'}">Individual Station Defect Rate (Miss)</div>
    </a-col>
  </a-row>
<!--  <a-row>-->
<!--    <a-col :span="18" :offset="3">-->
<!--      <div :style="{fontSize:'53px'}">1st Defect Rate</div>-->
<!--    </a-col>-->
<!--  </a-row>-->
<!--  <a-row a-row type="flex">-->
<!--    <a-col :span="21" :offset="3">-->
<!--      <DefectChart01/>-->
<!--    </a-col>-->

<!--  </a-row>-->
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'53px'}">EL1 Defect</div>
    </a-col>
  </a-row>
  <a-row a-row type="flex" justify="space-around" align="middle">
    <a-col :span="10" :offset="4">
      <ELDefectChat01/>
    </a-col>
    <a-col :span="10">
      不良率: 52.94%
      <br/>
      不良率: 40.29%
      <br/>
      不良率: 12.44%
      <br/>
    </a-col>
  </a-row>



</template>


<style scoped>

</style>