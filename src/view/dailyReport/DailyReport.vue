<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
import axios from "axios";

let dateValue = ref(dayjs());

const DateOnChange = (day) => {
  dateValue.value = day
  axios({
    url: "/apiStringer/report/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("查询成功 submit succeed", 4)
    }
  })
}

const getShiftId = () => {
  const month = (dateValue.value.$M + 1) <= 10 ? ("0" + (dateValue.value.$M + 1).toString()) : ((dateValue.value.$M + 1).toString())
  return Number((dateValue.value.$y).toString() + month + (dateValue.value.$D).toString() + "00");
}


</script>

<template>
  <a-row>
    <a-col :span="20">

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