<script setup>


import AddMO from "./AddMO.vue";
import GetOrder from "./GetOrder.vue";
import GetMOTemplate from "./GetMOTemplate.vue";
import DailyConsumption from "./DailyConsumption.vue";

const open = ref(false);
const showModal = () => {
  console.log("bb")
  open.value = true;
};
const handleOk = e => {
  console.log(e);
  console.log("dd")
  open.value = false;
};
</script>

<template>

  <div>
    <GetOrder/>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-button type="primary" @click="showModal">Open Modal</a-button>
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
    </a-row>
    <a-modal v-model:visible="open" title="Basic Modal" @ok="handleOk" :width="1200">
      <AddMO></AddMO>
    </a-modal>
    <GetMOTemplate/>
    <a-divider style="height: 2px; background-color: #7cb305"/>

    <DailyConsumption/>
  </div>

</template>

<style>

</style>