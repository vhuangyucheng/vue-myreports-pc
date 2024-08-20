<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import getDate from './../../../store/getDate';
import ELhourlyChart from "./chat/ELhourlyChart.vue";
import WipChart from "./chat/WipChart.vue";

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
      <div id="chartTitle">{{ getDateStore.getCurrentDay }} : Floor productivity 二线各个工作站生产力</div>
      <div id="chartTitle">（排版机, 前道EL, 装框, 分档, 打包)</div>
      <div>
        <OutputChat1 :style="{height:'300px'}"/>
      </div>
    </a-col>
    <a-divider type="vertical" style="height: 350px; background-color: #7cb305"/>
    <a-col :span="11">
      <ELDefectChat01/>
    </a-col>
  </a-row>
  <a-divider style="height: 2px; background-color: #7cb305"/>
  <a-row>
    <a-col :span="8">
      <ELhourlyChart/>
    </a-col>
    <a-divider type="vertical" style="height: 300px; background-color: #7cb305"/>
    <a-col :span="15">
      <div>
        <WipChart/>
      </div>
    </a-col>
  </a-row>


</template>


<style scoped>
#chartTitle {
  font-weight: bold;
  font-size: 25px;
  text-shadow: 0px 0px 0px
}
</style>