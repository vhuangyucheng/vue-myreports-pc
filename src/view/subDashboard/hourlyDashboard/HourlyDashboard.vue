<script setup>
import getDate from './../../../store/getDate';
import FramingHourlyChart from "./chart/FramingHourlyChart.vue";
import OutputChart from "./chart/OutputChat1.vue";
import ELhourlyChart from "./chart/ELhourlyChart.vue";
import LayupHourlyChart from "./chart/LayupHourlyChart.vue";
import PackingHourlyChart from "./chart/PackingHourlyChart.vue";
import SortingHourlyChart from "./chart/SortingHourlyChart.vue";

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
        <OutputChart />
      </div>
    </a-col>
    <a-divider type="vertical" style="height: 500px; background-color: #7cb305"/>
    <a-col :span="11">
      <div>
        <LayupHourlyChart :style="{height:'500px'}"/>
      </div>
    </a-col>
  </a-row>
  <a-divider style="height: 2px; background-color: #7cb305"/>
  <a-row>
    <a-col :span="12">
      <div>
        <ELhourlyChart/>
      </div>
    </a-col>
    <a-divider type="vertical" style="height: 500px; background-color: #7cb305"/>
    <a-col :span="11">
      <div>
        <FramingHourlyChart/>
      </div>
    </a-col>
  </a-row>
  <a-divider style="height: 2px; background-color: #7cb305"/>
  <a-row>
    <a-col :span="12">
      <div>
        <SortingHourlyChart/>
      </div>
    </a-col>
    <a-divider type="vertical" style="height: 500px; background-color: #7cb305"/>
    <a-col :span="11">
      <div>
        <PackingHourlyChart/>
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