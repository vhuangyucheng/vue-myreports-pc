<script setup>
import {defineProps} from "vue";

const props = defineProps(['dataFromPa', 'chartName'])
let dataList = ref([])
watch(() => props.dataFromPa, (newVal, oldVal) => {
  console.log('new', newVal)
  // newVal.forEach(item => {
  //   console.log(item.shiftId)
  // })
  dataList.value = newVal
})
</script>

<template>
  <a-row>
    <a-col :span="24">
      <a-comment>
        <template #author><a id="text">Production Team</a></template>
        <template #avatar>
          <a-avatar src="/prudctionlogo.png" alt="Nancy - Production Supervisor"/>
        </template>
        <template #content>
          <p v-if="dataList.length > 0">
            <a-flex :justify="'flex-start'" :align="'flex-start'" vertical>
            {{ dataList[0].shiftComment }}
            </a-flex>
          </p>
          <p v-else>
            No shift comment available
          </p>
        </template>
      </a-comment>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="24">
      <a-comment>
        <template #author><a id="text">Equipment Team</a></template>
        <template #avatar>
          <a-avatar src="/equipmentlogo.png" alt="Nancy - Production Supervisor"/>
        </template>
        <template #content>
          <p v-if="dataList.length > 0">
            <a-flex :justify="'flex-start'" :align="'flex-start'" vertical>
            {{ dataFromPa[0].equipmentComment }}
            </a-flex>
          </p>
          <p v-else>
            No shift comment available
          </p>
        </template>
      </a-comment>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="24">
      <a-comment>
        <template #author><a id="text">qc Team</a></template>
        <template #avatar>
          <a-avatar src="/equipmentlogo.png" alt="Nancy - Production Supervisor"/>
        </template>
        <template #content>
          <p v-if="dataList.length > 0">
            <a-flex :justify="'flex-start'" :align="'flex-start'" vertical>
              {{ dataFromPa[0].qcComment }}
            </a-flex>
          </p>
          <p v-else>
            No shift comment available
          </p>
        </template>
      </a-comment>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="24">
      <a-comment>
        <template #author><a id="text">Planning Team</a></template>
        <template #avatar>
          <a-avatar src="/equipmentlogo.png" alt="Nancy - Production Supervisor"/>
        </template>
        <template #content>
          <p v-if="dataList.length > 0">
            <a-flex :justify="'flex-start'" :align="'flex-start'" vertical>
              {{ dataFromPa[0].planningComment }}
            </a-flex>
          </p>
          <p v-else>
            No shift comment available
          </p>
        </template>
      </a-comment>
    </a-col>
  </a-row>
</template>


<style scoped>
#text {
  font-family: verdana;
  text-align: center;
  font-size: 24px;
  color: rgb(23, 22, 22);
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
}


</style>