<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";
import OutputChar02 from "./chat/OutputChar02.vue";
import BobaChart from "./chat/BobaChart.vue";
</script>


<template>
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'53px'}">weekly output</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="15" :offset="4">
      <OutputChat1/>
    </a-col>
    <a-col :span="5">
      <OutputChar02></OutputChar02>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="18" :offset="3">
      <div :style="{fontSize:'53px'}">Individual Station Defect Rate</div>
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
<!--      <ELDefectChat01/>-->
      <BobaChart></BobaChart>
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