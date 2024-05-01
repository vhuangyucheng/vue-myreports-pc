<script setup>

import axios from "axios";

let layup1 = ref(0)

const onGame = (event) => {
  console.log(layup1)
  axios({
    url: "/apiStringer/plan/setSchedule",
    method: "POST",
    data: {
      scheduleId: 1,
      layup1: 2
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === "1") {
      console.log("good")
    }
  })
}

axios({
  url: "/apiStringer/plan/getSchedule",
  method: "POST",
  data: {},
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  const dataFromBack = response.data.data
  layup1.value = dataFromBack.layup1

})

</script>

<template>
  <a-input v-model:value="layup1"/>
<a-button type="primary" @click="onGame">click</a-button>
</template>

<style scoped>

</style>