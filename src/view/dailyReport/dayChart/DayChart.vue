<script setup>
import DailyOutput from "./DailyOutput.vue";
import StringerEL from "./StringerEL.vue";
import DailyScrap from "./DailyScrap.vue";
import {toRefs, defineProps} from 'vue'

const props = defineProps(['value1', 'value2'])

console.log(props.value1)

// watch(()=>props.value1, (newVal, oldVal) => {
//   console.log('1监听引用类型数据dataList')
//   console.log('new', newVal)
//   console.log('old', oldVal)
// })

</script>

<template>
  <div>7/26 Wednesday</div>
  <div> {{ props.value2 }}</div>
  <a-row justify="space-between" align="bottom">
    <a-col :span="8">
            <DailyOutput :data1="props.value1" :chartName="props.value2"></DailyOutput>
    </a-col>
    <a-col :span="8">
            <StringerEL :data1="props.value1"  :chartName="props.value2"/>
    </a-col>
    <a-col :span="8">
            <DailyScrap :data1="props.value1"  :chartName="props.value2"/>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>