<script setup>
import DailyOutput from "./DailyOutput.vue";
import DailyScrap from "./DailyScrap.vue";
import {toRefs, defineProps} from 'vue'
import DailyDefect from "./DailyDefect.vue";
import DailyDegrade from "./DailyDegrade.vue";

const props = defineProps(['value1', 'value2'])

// console.log(props.value1)

watch(() => props.value1, (newVal, oldVal) => {
  // console.log('1监听引用类型数据dataList')
  // console.log('new', newVal)
  // console.log('old', oldVal)
})

</script>

<template>
  <div>
    <a-typography-title :level="2" type="success">{{ props.value2 }}</a-typography-title>
    <a-row justify="space-between" align="bottom">
      <a-col :span="12">
        <DailyOutput :dataFromPa="props.value1" :chartName="props.value2"></DailyOutput>
      </a-col>
      <a-col :span="12">
        <DailyDegrade :dataFromPa="props.value1" :chartName="props.value2"/>
      </a-col>
    </a-row >

    <a-row justify="center" align="top">
      <a-col :span="24">
        <DailyScrap :dataFromPa="props.value1" :chartName="props.value2"/>
        <DailyDefect :dataFromPa="props.value1" :chartName="props.value2"/>

      </a-col>

    </a-row>
  </div>
</template>

<style scoped>



</style>