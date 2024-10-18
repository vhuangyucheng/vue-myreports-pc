<script setup>
import {message} from 'ant-design-vue'
import axios from "axios";

let layup1 = ref(0)
let layup2 = ref(0)
let layup3 = ref(0)
let layup4 = ref(0)
let layup5 = ref(0)
let layup6 = ref(0)
let layup7 = ref(0)
let firstel1 = ref(0)
let firstel2 = ref(0)
let firstel3 = ref(0)
let firstel4 = ref(0)
let firstel5 = ref(0)
let firstel6 = ref(0)
let firstel7 = ref(0)
let framing1 = ref(0)
let framing2 = ref(0)
let framing3 = ref(0)
let framing4 = ref(0)
let framing5 = ref(0)
let framing6 = ref(0)
let framing7 = ref(0)
let sorting1 = ref(0)
let sorting2 = ref(0)
let sorting3 = ref(0)
let sorting4 = ref(0)
let sorting5 = ref(0)
let sorting6 = ref(0)
let sorting7 = ref(0)
let packing1 = ref(0)
let packing2 = ref(0)
let packing3 = ref(0)
let packing4 = ref(0)
let packing5 = ref(0)
let packing6 = ref(0)
let packing7 = ref(0)

const HourlyFormState = reactive({
  layupHourly: '',
  firstelHourly: '',
  framingHourly: '',
  sortingHourly: '',
  packingHourly: '',
});

const getWeekdayNumber = () => {
  const date = new Date();
  const day = date.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Convert to 1 (Monday) to 7 (Sunday) format
  const weekdayNumber = day === 0 ? 7 : day;
  console.log(weekdayNumber)
  return weekdayNumber;
};

const daySelector = ref(getWeekdayNumber()+"");

const onSubmit1 = (event) => {
  console.log(layup1)
  axios({
    url: "/apiStringer/plan/setSchedule",
    method: "POST",
    data: {
      scheduleId: 1,
      layup1 : layup1.value,
      layup2 : layup2.value,
      layup3 : layup3.value,
      layup4 : layup4.value,
      layup5 : layup5.value,
      layup6 : layup6.value,
      layup7 : layup7.value,
      firstel1 : firstel1.value,
      firstel2 : firstel2.value,
      firstel3 : firstel3.value,
      firstel4 : firstel4.value,
      firstel5 : firstel5.value,
      firstel6 : firstel6.value,
      firstel7 : firstel7.value,
      framing1 : framing1.value,
      framing2 : framing2.value,
      framing3 : framing3.value,
      framing4 : framing4.value,
      framing5 : framing5.value,
      framing6 : framing6.value,
      framing7 : framing7.value,
      sorting1 : sorting1.value,
      sorting2 : sorting2.value,
      sorting3 : sorting3.value,
      sorting4 : sorting4.value,
      sorting5 : sorting5.value,
      sorting6 : sorting6.value,
      sorting7 : sorting7.value,
      packing1 : packing1.value,
      packing2 : packing2.value,
      packing3 : packing3.value,
      packing4 : packing4.value,
      packing5 : packing5.value,
      packing6 : packing6.value,
      packing7 : packing7.value,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === "1") {
      message.success("提交成功 submit succeed", 4)
    }
  })
}

axios({
  url: "/apiStringer/plan/getSchedule",
  method: "POST",
  data: {},
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  const dataFromBack = response.data.data
  layup1.value = dataFromBack.layup1
  layup2.value = dataFromBack.layup2
  layup3.value = dataFromBack.layup3
  layup4.value = dataFromBack.layup4
  layup5.value = dataFromBack.layup5
  layup6.value = dataFromBack.layup6
  layup7.value = dataFromBack.layup7
  firstel1.value = dataFromBack.firstel1
  firstel2.value = dataFromBack.firstel2
  firstel3.value = dataFromBack.firstel3
  firstel4.value = dataFromBack.firstel4
  firstel5.value = dataFromBack.firstel5
  firstel6.value = dataFromBack.firstel6
  firstel7.value = dataFromBack.firstel7
  framing1.value = dataFromBack.framing1
  framing2.value = dataFromBack.framing2
  framing3.value = dataFromBack.framing3
  framing4.value = dataFromBack.framing4
  framing5.value = dataFromBack.framing5
  framing6.value = dataFromBack.framing6
  framing7.value = dataFromBack.framing7
  sorting1.value = dataFromBack.sorting1
  sorting2.value = dataFromBack.sorting2
  sorting3.value = dataFromBack.sorting3
  sorting4.value = dataFromBack.sorting4
  sorting5.value = dataFromBack.sorting5
  sorting6.value = dataFromBack.sorting6
  sorting7.value = dataFromBack.sorting7
  packing1.value = dataFromBack.packing1
  packing2.value = dataFromBack.packing2
  packing3.value = dataFromBack.packing3
  packing4.value = dataFromBack.packing4
  packing5.value = dataFromBack.packing5
  packing6.value = dataFromBack.packing6
  packing7.value = dataFromBack.packing7
  HourlyFormState.layupHourly = dataFromBack['layupHourly'+daySelector.value]
  HourlyFormState.firstelHourly = dataFromBack['firstelHourly'+daySelector.value]
  HourlyFormState.framingHourly = dataFromBack['framingHourly'+daySelector.value]
  HourlyFormState.sortingHourly = dataFromBack['sortingHourly'+daySelector.value]
  HourlyFormState.packingHourly = dataFromBack['packingHourly'+daySelector.value]
})

const weekdayOnChange = (event) => {
  // console.log("weekdayOnChange")
  axios({
    url: "/apiStringer/plan/getSchedule",
    method: "POST",
    data: {},
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    const dataFromBack = response.data.data
    HourlyFormState.layupHourly   =   dataFromBack['layupHourly'+daySelector.value]
    HourlyFormState.firstelHourly = dataFromBack['firstelHourly'+daySelector.value]
    HourlyFormState.framingHourly = dataFromBack['framingHourly'+daySelector.value]
    HourlyFormState.sortingHourly = dataFromBack['sortingHourly'+daySelector.value]
    HourlyFormState.packingHourly = dataFromBack['packingHourly'+daySelector.value]
  })
}

const onFinish = values => {
  axios({
    url: "/apiStringer/plan/setSchedule",
    method: "POST",
    data: {
      scheduleId: 1,
      [`layupHourly${daySelector.value}`]   : HourlyFormState.layupHourly  ,
      [`firstelHourly${daySelector.value}`] : HourlyFormState.firstelHourly,
      [`framingHourly${daySelector.value}`] : HourlyFormState.framingHourly,
      [`sortingHourly${daySelector.value}`] : HourlyFormState.sortingHourly,
      [`packingHourly${daySelector.value}`] : HourlyFormState.packingHourly,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === "1") {
      message.success("提交成功 submit succeed", 4)
    }
  })
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

</script>

<template>

  <a-row>
    <a-col :span="4">
      <div>
        <a-col :offset="12" :span="24">
          <h1 style="color: cornflowerblue">
            Monday
          </h1>
        </a-col>
        <div>
          <a-form
              :label-col="{ offset:4,span: 12 }"
              :wrapper-col="{ span: 8 }"
              autocomplete="off"
          >
            <a-form-item
                label="layup"
                name="layup1"

            >
              <a-input v-model:value="layup1"/>
            </a-form-item>

            <a-form-item
                label="FirstEL"
                name="firstel1"

            >
              <a-input v-model:value="firstel1"/>
            </a-form-item>

            <a-form-item
                label="Framing"
                name="framing1"

            >
              <a-input v-model:value="framing1"/>
            </a-form-item>

            <a-form-item
                label="Sorting"
                name="sorting1"

            >
              <a-input v-model:value="sorting1"/>
            </a-form-item>

            <a-form-item
                label="Packing"
                name="packing1"

            >
              <a-input v-model:value="packing1"/>
            </a-form-item>

          </a-form>

        </div>

      </div>
    </a-col>
    <a-col :span="2">
      <div>
        <h1 style="color: cornflowerblue">
          Tuesday
        </h1>
        <div>
          <a-form

              :wrapper-col="{ offset: 6,span: 16 }"
              autocomplete="off"


          >
            <a-form-item
                name="layup2"

            >
              <a-input v-model:value="layup2"/>
            </a-form-item>

            <a-form-item
                name="firstel2"

            >
              <a-input v-model:value="firstel2"/>
            </a-form-item>

            <a-form-item
                name="framing2"

            >
              <a-input v-model:value="framing2"/>
            </a-form-item>

            <a-form-item
                name="sorting2"

            >
              <a-input v-model:value="sorting2"/>
            </a-form-item>

            <a-form-item
                name="packing2"

            >
              <a-input v-model:value="packing2"/>
            </a-form-item>

          </a-form>
        </div>
      </div>
    </a-col>
    <a-col :span="2">
      <div>
        <h1 style="color: cornflowerblue">
          Wednesday
        </h1>
        <div>
          <a-form

              :wrapper-col="{ offset: 6,span: 16 }"
              autocomplete="off"


          >
            <a-form-item
                name="layup3"

            >
              <a-input v-model:value="layup3"/>
            </a-form-item>

            <a-form-item
                name="firstel3"

            >
              <a-input v-model:value="firstel3"/>
            </a-form-item>

            <a-form-item
                name="framing3"

            >
              <a-input v-model:value="framing3"/>
            </a-form-item>

            <a-form-item
                name="sorting3"

            >
              <a-input v-model:value="sorting3"/>
            </a-form-item>

            <a-form-item
                name="packing3"

            >
              <a-input v-model:value="packing3"/>
            </a-form-item>

          </a-form>
        </div>
      </div>
    </a-col>
    <a-col :span="2">
      <div>
        <h1 style="color: cornflowerblue">
          Thursday
        </h1>
        <div>
          <a-form

              :wrapper-col="{ offset: 6,span: 16 }"
              autocomplete="off"


          >
            <a-form-item
                name="layup4"

            >
              <a-input v-model:value="layup4"/>
            </a-form-item>

            <a-form-item
                name="firstel4"

            >
              <a-input v-model:value="firstel4"/>
            </a-form-item>

            <a-form-item
                name="framing4"

            >
              <a-input v-model:value="framing4"/>
            </a-form-item>

            <a-form-item
                name="sorting4"

            >
              <a-input v-model:value="sorting4"/>
            </a-form-item>

            <a-form-item
                name="packing4"

            >
              <a-input v-model:value="packing4"/>
            </a-form-item>

          </a-form>
        </div>
      </div>
    </a-col>
    <a-col :span="2">
      <div>
        <h1 style="color: cornflowerblue">
          Friday
        </h1>
        <div>
          <a-form

              :wrapper-col="{ offset: 6,span: 16 }"
              autocomplete="off"


          >
            <a-form-item
                name="layup5"

            >
              <a-input v-model:value="layup5"/>
            </a-form-item>

            <a-form-item
                name="firstel5"

            >
              <a-input v-model:value="firstel5"/>
            </a-form-item>

            <a-form-item
                name="framing5"

            >
              <a-input v-model:value="framing5"/>
            </a-form-item>

            <a-form-item
                name="sorting5"

            >
              <a-input v-model:value="sorting5"/>
            </a-form-item>

            <a-form-item
                name="packing5"

            >
              <a-input v-model:value="packing5"/>
            </a-form-item>

          </a-form>
        </div>
      </div>
    </a-col>
    <a-col :span="2">
      <div>
        <h1 style="color: cornflowerblue">
          Saturday
        </h1>
        <div>
          <a-form

              :wrapper-col="{ offset: 6,span: 16 }"
              autocomplete="off"


          >
            <a-form-item
                name="layup6"

            >
              <a-input v-model:value="layup6"/>
            </a-form-item>

            <a-form-item
                name="firstel6"

            >
              <a-input v-model:value="firstel6"/>
            </a-form-item>

            <a-form-item
                name="framing6"

            >
              <a-input v-model:value="framing6"/>
            </a-form-item>

            <a-form-item
                name="sorting6"

            >
              <a-input v-model:value="sorting6"/>
            </a-form-item>

            <a-form-item
                name="packing6"

            >
              <a-input v-model:value="packing6"/>
            </a-form-item>

          </a-form>
        </div>
      </div>
    </a-col>
    <a-col :span="2">
      <div>
        <h1 style="color: cornflowerblue">
          Sunday
        </h1>
        <div>
          <a-form

              :wrapper-col="{ offset: 6,span: 16 }"
              autocomplete="off"


          >
            <a-form-item
                name="layup7"

            >
              <a-input v-model:value="layup7"/>
            </a-form-item>

            <a-form-item
                name="firstel7"

            >
              <a-input v-model:value="firstel7"/>
            </a-form-item>

            <a-form-item
                name="framing7"

            >
              <a-input v-model:value="framing7"/>
            </a-form-item>

            <a-form-item
                name="sorting7"

            >
              <a-input v-model:value="sorting7"/>
            </a-form-item>

            <a-form-item
                name="packing7"
            >
              <a-input v-model:value="packing7"/>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </a-col>
  </a-row>
  <a-button type="primary" @click="onSubmit1">提交Submit</a-button>
  <a-divider style="height: 2px; background-color: #7cb305"/>
  <h1 style="color: cornflowerblue">
    Hourly Breakdown Target Setup
  </h1>
  <a-row>
    <a-col :span="24">
      <a-radio-group v-model:value="daySelector" button-style="solid" size="large" @change="weekdayOnChange">
        <a-radio-button value="1">Monday</a-radio-button>
        <a-radio-button value="2">Tuesday</a-radio-button>
        <a-radio-button value="3">Wednesday</a-radio-button>
        <a-radio-button value="4">Thursday</a-radio-button>
        <a-radio-button value="5">Friday</a-radio-button>
        <a-radio-button value="6">Saturday</a-radio-button>
        <a-radio-button value="7">Sunday</a-radio-button>
      </a-radio-group>
      <div>
      <div> Example: 8=60,9=70,10=66</div>
        <div>
          <a-form
              :model="HourlyFormState"
              name="HourlyFormState"
              :label-col="{ span: 3 }"
              :wrapper-col="{ span: 21 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
          >
            <a-form-item
                label="Layup"
                name="layupHourly"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="HourlyFormState.layupHourly"/>
            </a-form-item>

            <a-form-item
                label="FirstEL"
                name="firstelHourly"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="HourlyFormState.firstelHourly"/>
            </a-form-item>

            <a-form-item
                label="Framing"
                name="framingHourly"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="HourlyFormState.framingHourly"/>
            </a-form-item>

            <a-form-item
                label="Sorting"
                name="sortingHourly"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="HourlyFormState.sortingHourly"/>
            </a-form-item>

            <a-form-item
                label="Packing"
                name="packingHourly"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="HourlyFormState.packingHourly"/>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 4,span: 16 }">
              <a-button type="primary" html-type="submit" >提交Submit</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </a-col>
  </a-row>

</template>

<style scoped>

</style>