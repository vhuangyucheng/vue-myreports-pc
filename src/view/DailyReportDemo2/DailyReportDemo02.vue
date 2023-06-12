<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";
</script>


<template>
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'57px'}">06/07/2023 Wednesday Productivity</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="10"  >
      <div>productivity</div>
      <div >
        <OutputChat1 :style="{height:'300px'}"/>
      </div>
    </a-col>
    <a-col :span="10">
      <div>不良率: 18.08%&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp19.69%&nbsp&nbsp&nbsp&nbsp18.30%</div>
      <ELDefectChat01 />
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
    <a-col :span="24" >
      <DefectChart01/>
    </a-col>

  </a-row>
  <a-row>
    <a-col :span="17" :offset="4">
      <div :style="{fontSize:'57px'}">EL1 Defect</div>
    </a-col>
  </a-row>
  <a-row a-row type="flex" justify="space-around" align="middle">
    <a-col :span="10" :offset="4">

    </a-col>

  </a-row>



</template>


<style scoped>

</style>