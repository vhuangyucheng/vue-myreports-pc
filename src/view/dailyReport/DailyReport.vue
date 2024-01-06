<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
import axios from "axios";
import DayChart from "./dayChart/DayChart.vue";
import {CheckOutlined} from '@ant-design/icons-vue';

let dateValue = ref(dayjs());
let line1Value = ref([]);
let line2Value = ref([]);
let line2 = ref("line2");
let line1 = ref("line1");
let emptyIcon = ref(true);

import getImprovementList from '../../store/getImprovementList';

const getImprovementListStore = getImprovementList();



const DateOnChange = (day) => {
  dateValue.value = day
  axios({
    url: "/apiStringer/shiftRecord/listShiftRecord",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      isLock: 1,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '0') {
      emptyIcon.value = true;
      message.error("当天没有任何记录 no records for the day", 4)
      line2Value.value = [];
      line1Value.value = [];
      // console.log(line2Value.value)
      // console.log(line1Value.value)
      return;
    }
    if (response.data.code === '1') {
      emptyIcon.value = false;
      message.success("查询成功 submit succeed", 4)
    }
    // 分shift
    const groupByLine = response.data.data.reduce((result, item) => {
      const groupKey = item.shiftId > (getShiftId() + 20) ? 'line2' : 'line1';

      if (!result[groupKey]) {
        result[groupKey] = [];
      }

      result[groupKey].push(item);

      return result;
    }, {});
    line2Value.value = groupByLine.line2 !== undefined ? groupByLine.line2 : [];
    line1Value.value = groupByLine.line1 !== undefined ? groupByLine.line1 : [];
    // console.log(line2Value.value)
    // console.log(line1Value.value)
  })
}


const getShiftId = () => {
  const month = (dateValue.value.$M + 1) < 10 ? ("0" + (dateValue.value.$M + 1).toString()) : ((dateValue.value.$M + 1).toString())
  const day = (dateValue.value.$D) < 10 ? ("0" + (dateValue.value.$D).toString()) : ((dateValue.value.$D).toString())
  return Number((dateValue.value.$y).toString() + month + day + "00");
}

DateOnChange(dateValue.value)

</script>

<template>


  <a-row>
    <a-col :span="18">

      <!--      <a-empty v-if="emptyIcon"/>-->
      <!--      <div v-else>-->
      <!--        <div v-if="line2Value.length!==0">-->

      <a-row>
        <a-col :span="24">
          <DayChart :value1="line2Value" :value2="line2"/>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>

      <!--        </div>-->
      <!--        <div v-if="line1Value.length!==0">-->
      <a-row>
        <a-col :span="24">
          <DayChart :value1="line1Value" :value2="line1"/>
        </a-col>
      </a-row>
      <!--        </div>-->
      <!--      </div>-->

    </a-col>
    <a-col :span="6">
      <a-row>
        <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <a-calendar v-model:value="dateValue" :fullscreen="false" @select="DateOnChange"/>
        </div>
      </a-row>
      <div style="background-color: #ececec; padding: 10px">
        <a-row :gutter="18">
          <a-col :span="12">
            <a-card title="New line" :bordered="false" style="padding: 0px">
              <div>1 Shift : <span v-if="line2Value.find(item=>item.shiftId ===getShiftId()+21)"><CheckOutlined/></span>
              </div>
              <div>2 Shift : <span v-if="line2Value.find(item=>item.shiftId ===getShiftId()+22)"><CheckOutlined/></span>
              </div>
              <div>3 Shift : <span v-if="line2Value.find(item=>item.shiftId ===getShiftId()+23)"><CheckOutlined/></span>
              </div>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card title="Old line" :bordered="false">
              <div>1 Shift : <span v-if="line1Value.find(item=>item.shiftId ===getShiftId()+11)"><CheckOutlined/></span>
              </div>
              <div>2 Shift : <span v-if="line1Value.find(item=>item.shiftId ===getShiftId()+12)"><CheckOutlined/></span>
              </div>
              <div>3 Shift : <span v-if="line1Value.find(item=>item.shiftId ===getShiftId()+13)"><CheckOutlined/></span>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div style="background-color: #ececec; padding: 10px">
        <a-row :gutter="18">
          <a-col :span="12">
            <a-card title="New line need to improve" :bordered="false" style="padding: 0px">
              <div>{{ getImprovementListStore.getLine2ImprovementList }}</div>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card title="Old line need to improve" :bordered="false">
              <div>{{ getImprovementListStore.getLine1ImprovementList }}</div>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>