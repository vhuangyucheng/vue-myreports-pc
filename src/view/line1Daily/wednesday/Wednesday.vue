<script setup>
import DailyOutput1 from "./chart/DailyOutput.vue";
import StringerEL from "./chart/StringerEL1.vue";
import DailyScrap from "./chart/DailyScrap.vue";
</script>

<template>
  <div>7/26 Wednesday</div>
  <a-row justify="space-between" align="bottom">
    <a-col :span="8">
      <DailyOutput1></DailyOutput1>
    </a-col>
    <a-col :span="8">
      <StringerEL/>
    </a-col>
    <a-col :span="8">
      <DailyScrap/>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>