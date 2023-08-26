<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
import axios from "axios";
import DayChart from "./dayChart/DayChart.vue";

let dateValue = ref(dayjs());
let line1Value = ref({});
let line2Value = ref({});
let line2 = ref("line2");
let line1 = ref("line1");

const DateOnChange = (day) => {
  dateValue.value = day
  axios({
    url: "/apiStringer/report/listRecord",
    method: "POST",
    data: {
      shiftId: getShiftId(),
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '0') {
      message.error("当天没有任何记录 no records for the day", 4)
      return;
    }
    if (response.data.code === '1') {
      message.success("查询成功 submit succeed", 4)
    }
    // 分shift
    const groupByLine = response.data.data.reduce((result, item) => {
      const groupKey = item.shiftId > (getShiftId()+20) ? 'line2' : 'line1';

      if (!result[groupKey]) {
        result[groupKey] = [];
      }

      result[groupKey].push(item);

      return result;
    }, {});
    line2Value.value = groupByLine.line2
    line1Value.value = groupByLine.line1
    // console.log(line2Value.value)
    // console.log(line1Value.value)
  })
}

const getShiftId = () => {
  const month = (dateValue.value.$M + 1) <= 10 ? ("0" + (dateValue.value.$M + 1).toString()) : ((dateValue.value.$M + 1).toString())
  return Number((dateValue.value.$y).toString() + month + (dateValue.value.$D).toString() + "00");
}

</script>

<template>
  <a-row>
    <a-col :span="18">
      <a-row>
        <a-col :span="24">
          <DayChart :value1="line2Value" :value2="line2"/>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <DayChart :value1="line1Value" :value2="line1"/>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4">
      <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <a-calendar v-model:value="dateValue" :fullscreen="false" @select="DateOnChange"/>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>