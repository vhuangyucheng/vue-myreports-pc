<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
</script>


<template>
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'53px'}">today output</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="10" :offset="4">
      <OutputChat1/>
    </a-col>
    <a-col :span="10">
      input: 2线晚班贴条码：550W
      <br/>
      SCE22300001038P2F0
      <br/>
      SCE2230001310P2F0
      <br/>
      共273件
      <br/>
      finished goods: xxx
      <br/>
      input: 2线晚班贴条码：550W
      <br/>
      SCE22300001038P2F0
      <br/>
      SCE2230001310P2F0
      <br/>
      共273件
      <br/>
      finished goods: xxx
      <br/>
      input: 2线晚班贴条码：550W
      <br/>
      SCE22300001038P2F0
      <br/>
      SCE2230001310P2F0
      <br/>
      共273件
      <br/>
      finished goods: xxx
      <br/>
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
      前道EL产量487，不良110，不良率: 22.58%
      <br/>
      前道EL产量487，不良110，不良率: 22.58%
      <br/>
      前道EL产量487，不良110，不良率: 22.58%
      <br/>
    </a-col>
  </a-row>


</template>


<style scoped>

</style>