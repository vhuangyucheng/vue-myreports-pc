<script setup>
import {toRefs, defineProps} from 'vue'
import DailyDefect from "./DailyDefect.vue";
import DayScrap from "./DailyScrap.vue";
import axios from "axios";
import {message} from "ant-design-vue";

// console.log(props.value1)

const selectorOptions = ref([]);
const selectorInit = ref([]);
const dataFromPa = ref([]);

const ShiftOnChange = (value) => {
  console.log(value)
  listWo(value)
}

const listWo = (wo)=>{
  axios({
    url: "/apiStringer/shiftRecord/listShiftRecordByWo",
    method: "POST",
    data: {
      wo:wo
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    console.log(response.data.data)
    dataFromPa.value = response.data.data
  })
}

axios({
  url: "/apiStringer/setting/listWo",
  method: "POST",
  data: {
  },
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  response.data.data.forEach((value, i) => {
    selectorOptions.value.push({
      value : value.woName,
    });
  });
})

axios({
  url: "/apiStringer/setting/getSetting",
  method: "POST",
  data: {
  },
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  // console.log(response.data.data.currentWo)
  selectorInit.value.push(response.data.data.currentWo)
  listWo(response.data.data.currentWo)
})



</script>

<template>
  <div>
    <a-flex gap="middle" horizontal justify="flex-start" align="center">
      <div>当前工单Current WO：</div>
    <a-select
        v-model:value="selectorInit"
        mode="combobox"
        style="width: 40%"
        placeholder="Please select"
        :options="selectorOptions"
        @change="ShiftOnChange"
    />
    </a-flex>

    <a-divider style="height: 2px; background-color: #7cb305"/>

    <a-row justify="center" align="top">
      <a-col :span="24">
        <DayScrap :dataFromPa="dataFromPa" />
        <a-divider style="height: 2px; background-color: #7cb305"/>
        <DailyDefect :dataFromPa="dataFromPa" />
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>


</style>