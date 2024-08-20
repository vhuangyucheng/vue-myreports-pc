<script setup>
import {Liquid} from '@antv/g2plot';

import getDiff from '../../../../store/getDiff';
import axios from "axios";

const getDiffStore = getDiff();

let liquidPlot;
let rawDiff
let diff = ref(0);
let wipToShow = ref(0);
let totalToShow = ref(0);




function axiosCall(){
  rawDiff = getDiffStore.getWipDiff
  console.log(rawDiff)
  axios({
    url: "/apiStringer/setting/getSetting",
    method: "POST",
    data: {},
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    diff = (rawDiff+ response.data.data.initialWip)/ (response.data.data.laminator)
    wipToShow.value = (rawDiff+ response.data.data.initialWip)
    totalToShow.value =  (response.data.data.laminator)
    console.log(rawDiff)
    liquidPlot.changeData(diff)
    if(diff>0.8){
      liquidPlot.update({color: '#f391a9'})
    }else liquidPlot.update({color: '#00ae9d'})
  })
}

axiosCall()
setInterval(axiosCall, 60 * 1000);

onMounted(() => {
  liquidPlot = new Liquid('wipContainer123', {
    percent: 0,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  });
  liquidPlot.render();
})

</script>

<template>
  <a-row>
    <a-col :span="8">
      <div id="chartTitle">
        <div >WIP of Laminators to Framing: </div>
        <div>{{wipToShow}} / {{totalToShow}}</div>
        <div >层压机 到 装框容量: </div>
        <div>{{wipToShow}} / {{totalToShow}}</div>
      </div>

    </a-col>
    <a-col :span="8">
      <div>
        <div id="wipContainer123" :style="{height:'300px'}"/>
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