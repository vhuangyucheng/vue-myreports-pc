<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";
import StringerOutput from "./chat/StringerOutput.vue";
import DefectChart02 from "./chat/DefectChart02.vue";
import DefectChart03 from "./chat/DefectChart03.vue";
</script>


<template>
<!--  <a-row>-->
<!--    <a-col :span="17" :offset="4">-->
<!--      <div :style="{fontSize:'57px'}">06/07/2023 Wednesday Productivity</div>-->
<!--    </a-col>-->
<!--  </a-row>-->
  <a-row>
    <a-col :span="12"  >
      <div>productivity</div>
      <div >
        <OutputChat1 :style="{height:'300px'}"/>
      </div>
    </a-col>
    <a-col :span="12">
      <div>不良率: 18.08%&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp19.69%&nbsp&nbsp&nbsp&nbsp18.30%</div>
      <div>不良率: 18.08%&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp19.69%&nbsp&nbsp&nbsp&nbsp18.30%</div>
      <div>不良率: 18.08%&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp19.69%&nbsp&nbsp&nbsp&nbsp18.30%</div>
      <div>不良率: 18.08%&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp19.69%&nbsp&nbsp&nbsp&nbsp18.30%</div>

      <ELDefectChat01 />
      <DefectChart01/>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="12"  >
      <div>productivity</div>
      <div >
        <StringerOutput :style="{height:'300px'}"/>
      </div>
    </a-col>
    <a-col :span="12">
      <DefectChart02/>
      <DefectChart03/>
    </a-col>
  </a-row>




</template>


<style scoped>

</style>