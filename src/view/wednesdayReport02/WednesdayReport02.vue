<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";
</script>


<template>
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'53px'}">06/07/2023 Wednesday Productivity</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="10" :offset="4">
      <OutputChat1/>
    </a-col>
    <a-col :span="10">
      input: 2线早班贴条码：550W
      <br/>
      SCE2230001977P2F0
      <br/>
      SCE2230002420P2F0
      <br/>
      共444件
      <br/>
      finished goods: 419
      <br/>
      input: 2线晚班贴条码：550W
      <br/>
      SCF2230002421P2F0
      <br/>
      SCF2230002930P2F0
      <br/>
      共510件
      <br/>
      finished goods: 438
      <br/>
      input: 2线晚班贴条码：550W
      <br/>
      SCF2230002931P2F0
      <br/>
      SCF2230002935P2F0
      <br/>
      共5件
      <br/>
      finished goods: 267
      <br/>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="18" :offset="3">
      <div :style="{fontSize:'53px'}">Individual Station Defect Rate</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="18" :offset="3">
      <div :style="{fontSize:'53px'}">1st Defect Rate</div>
    </a-col>
  </a-row>
  <a-row a-row type="flex">
    <a-col :span="21" :offset="3">
      <DefectChart01/>
    </a-col>

  </a-row>
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
      前道EL产量459，不良83，不良率: 18.08%
      <br/>
      前道EL产量66，不良13，不良率: 19.69%
      <br/>
      前道EL产量530，不良97，不良率: 18.30%
      <br/>
    </a-col>
  </a-row>



</template>


<style scoped>

</style>