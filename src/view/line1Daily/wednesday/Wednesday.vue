<script setup>
import DailyOutput from "./chart/DailyOutput.vue";
import StringerEL from "./chart/StringerEL.vue";
import DailyScrap from "./chart/DailyScrap.vue";
</script>

<template>
  <div>7/26 Wednesday</div>
  <a-row>
    <a-col :span="8">
      <DailyOutput></DailyOutput>
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