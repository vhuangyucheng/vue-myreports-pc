<script setup>


import AddMO from "./SaveBOM.vue";
import GetOrder from "./GetOrder.vue";
import GetMOTemplate from "./GetMOTemplate.vue";
import DailyConsumption from "./DailyConsumption.vue";
import SaveBOM from "./SaveBOM.vue";
import SaveDailyConsumption from "./SaveDailyConsumption.vue";

const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleOk = e => {
  open.value = false;
};

const open2 = ref(false);
const showModal2 = () => {
  open2.value = true;
};
const handleOk2 = e => {
  open2.value = false;
};
</script>

<template>

  <div>
    <GetOrder/>
    <a-divider style="height: 2px; background-color: #7cb305"/>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-flex gap="middle" align="center" :vertical="false">
          <a-button type="primary" @click="showModal">Edit BOM</a-button>
        </a-flex>
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
    <a-row :gutter="16">
      <a-col :span="6">
        <a-flex gap="middle" align="center" :vertical="false">
          <a-button type="primary" @click="showModal2">Edit DailyConsumption</a-button>
        </a-flex>
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
    </a-row>
    <DailyConsumption/>
    <a-modal v-model:open="open2" title="SaveDailyConsumption" @ok="handleOk2" :width="400">
      <SaveDailyConsumption></SaveDailyConsumption>
    </a-modal>
  </div>

</template>

<style>

</style>