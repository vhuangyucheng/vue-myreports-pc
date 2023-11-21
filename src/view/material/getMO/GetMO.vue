<script setup>


import AddMO from "./SaveBOM.vue";
import GetOrder from "./GetOrder.vue";
import GetMOTemplate from "./GetMOTemplate.vue";
import DailyConsumption from "./DailyConsumption.vue";
import SaveBOM from "./SaveBOM.vue";

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
    <a-divider style="height: 2px; background-color: #7cb305"/>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-button type="primary" @click="showModal">Edit BOM</a-button>
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
    </a-row>
    <a-modal v-model:open="open" title="Edit BOM" @ok="handleOk" :width="1200">
      <SaveBOM></SaveBOM>
    </a-modal>
    <GetMOTemplate/>
    <a-divider style="height: 2px; background-color: #7cb305"/>

    <DailyConsumption/>
  </div>

</template>

<style>

</style>