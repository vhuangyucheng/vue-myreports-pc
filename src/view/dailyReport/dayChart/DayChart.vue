<script setup>
import DailyOutput from "./DailyOutput.vue";
import StringerEL from "./StringerEL.vue";
import DailyScrap from "./DailyScrap.vue";
import {toRefs, defineProps} from 'vue'

const props = defineProps(['value1', 'value2'])

// console.log(props.value1)

watch(()=>props.value1, (newVal, oldVal) => {
  // console.log('1监听引用类型数据dataList')
  // console.log('new', newVal)
  // console.log('old', oldVal)
})

</script>

<template>
  <div>
    <a-divider style="height: 2px; background-color: #7cb305"/>
    <a-typography-title :level="2" type="success">{{ props.value2 }}</a-typography-title>
    <a-row justify="space-between" align="bottom">
      <a-col :span="12">
        <DailyOutput :dataFromPa="props.value1" :chartName="props.value2"></DailyOutput>
      </a-col>

      <a-col :span="12">
        <DailyScrap :dataFromPa="props.value1" :chartName="props.value2"/>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>

</style>