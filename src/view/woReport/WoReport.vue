<script setup>
import dayjs from 'dayjs';
import axios from "axios";
import DayChart from "./dayChart/DayChart.vue";



</script>

<template>
  <a-row>
    <a-col :span="24">
      <a-row>
        <a-col :span="24">
          <DayChart />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>