<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
import axios from "axios";

const shiftOptions = [{
  value: 'line1',
  label: '旧线old line',
  children: [{
    value: '11',
    label: '旧线早班old line-Day',
  },
    {
      value: '12',
      label: '旧线晚班old line-Night',
    },
    {
      value: '13',
      label: '旧线深晚班old line-NN',
    },
  ],
}, {
  value: 'line2',
  label: '新线new line',
  children: [{
    value: '21',
    label: '新线早班new line-Day',
  },
    {
      value: '22',
      label: '新线晚班new line-Night',
    },
    {
      value: '23',
      label: '新线深晚班new line-NN',
    },

  ],
},];
let shiftValue = ref([]);
let dateValue = ref(dayjs());

const onPanelChange = (day) => {
  console.log("onPanelChange" + day)
}

const DateOnChange = (day) => {
  dateValue.value = day
  shiftValue.value = [];
  console.log(dateValue.value);
}

let isLock = reactive(0);
let shiftId ;
const QRCodeFormState = reactive({
  QRCodeStart: '',
  QRCodeEnd: '',
  QRCodeAmount: '',
});

const firstELFormState = reactive({
  firstELOutput: '',
  firstELDefect: '',
  QRCodeAmount: '',
});
const reworkFormState = reactive({
  moduleRepair: '',
  moduleScrap: '',
  stringRepair: '',
  stringScrap: '',
  repairCellsReceive: '',
});
const secondHalfFormState = reactive({
  visualInspection: '',
  visualInspectionDefect: '',
  framing: '',
  framingDefect: '',
  jboxWelding: '',
  jboxWeldingDefect: '',
  cleaning: '',
  cleaningDefect: '',
  secondEL: '',
  secondELDefect: '',
});

const stringerFormState = reactive({
  stringer1: '',
  stringer1Defect: '',
  stringer2: '',
  stringer2Defect: '',
  stringer3: '',
  stringer3Defect: '',
  openBoxBroken: '',
  StringerBrokenCells: '',
  cellsInput: '',
});

const othersFormState = reactive({
  panelScrap: '',
});

const labelOnFinish = values => {
  if(undefined === shiftValue.value[1]){
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/report/saveAndUpdate",
    method: "POST",
    data: {
      shiftId:  getShiftId(),
      qrcodeStart: QRCodeFormState.QRCodeStart,
      qrcodeEnd: QRCodeFormState.QRCodeEnd,
      qrcodeAmount: QRCodeFormState.QRCodeAmount,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if(response.data.code === '1'){
      message.success("提交成功 submit succeed", 4)
    }
  })
};

const firstELOnFinish = values => {
  console.log('Success:', values);
};

const reworkOnFinish = values => {
  console.log('Success:', values);
};

const secondHalfOnFinish = values => {
  console.log('Success:', values);
};

const stringerOnFinish = values => {
  console.log('Success:', values);
};

const othersOnFinish = values => {
  console.log(shiftValue.value[0]);
  if (shiftValue.value[0] === undefined)
      // console.log(shiftValue.value[1]);
      // console.log(dateValue.value.$D)
    message.success('This is an error message');
  console.log('Success:', values);

};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const lockOnClick = () => {
  console.log("lock")
};
const getShiftId = ()=> {
  const month = (dateValue.value.$M + 1) <= 10 ? ("0" + (dateValue.value.$M + 1).toString()) : ((dateValue.value.$M + 1).toString())
  return Number((dateValue.value.$y).toString() + month + (dateValue.value.$D).toString() + (shiftValue.value[1].toString()));
}

const ShiftOnChange = (value) => {

  // let shiftIdParam = getShiftId();

  // console.log((dateValue.value.$y).toString())
  // console.log(month)
  // console.log((dateValue.value.$D).toString())
  // console.log((value[1].toString()))
  // console.log(shiftID);
  axios({
    url: "/apiStringer/report/getRecord",
    method: "POST",
    data: {
      shiftId: getShiftId(),
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    console.log(response.data)
    console.log(QRCodeFormState)
    if(null === response.data.data){
      message.info("这个班别暂时没有记录 This shift have no record yet")
      return ;
    }
    shiftId = response.data.data.shiftId;
    QRCodeFormState.QRCodeStart = response.data.data.qrcodeStart;
    QRCodeFormState.QRCodeEnd = response.data.data.qrcodeEnd;
    QRCodeFormState.QRCodeAmount = response.data.data.qrcodeAmount;
    firstELFormState.firstELOutput = response.data.data.firstELOutput;
    firstELFormState.firstELDefect = response.data.data.firstELDefect;
    isLock = response.data.data.isLock;
    console.log(isLock===1)
  })
}
</script>

<template>
  <a-row>
    <a-col :span="20">
      <a-row>
        <a-col :span="8">
          <div>
            QR Code
          </div>
          <div>
            <a-form
                :model="QRCodeFormState"
                name="QRCodeFormState"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                @finish="labelOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="条码开始QRCodeStart"
                  name="QRCodeStart"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="QRCodeFormState.QRCodeStart"/>
              </a-form-item>

              <a-form-item
                  label="条码结束QRCodeEnd"
                  name="QRCodeEnd"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="QRCodeFormState.QRCodeEnd"/>
              </a-form-item>

              <a-form-item
                  label="条码数量 amount"
                  name="QRCodeAmount"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="QRCodeFormState.QRCodeAmount"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-divider type="vertical" style="height: 350px; border-color: #7cb305" dashed/>
        <a-col :span="8">
          <div>
            First EL
          </div>
          <div>
            <a-form
                :model="firstELFormState"
                name="firstELFormState"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 14 }"
                autocomplete="off"
                @finish="firstELOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="层前EL产出FirstEL output "
                  name="firstELOutput"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="firstELFormState.firstELOutput"/>
              </a-form-item>

              <a-form-item
                  label="不良defect"
                  name="firstELDefect"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="firstELFormState.firstELDefect"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-divider type="vertical" style="height: 350px; border-color: #7cb305" dashed/>
        <a-col :span="7">
          <div>
            <div>
              Rework
            </div>
            <div>
              <a-form
                  :model="reworkFormState"
                  name="ReworkFormState"
                  :label-col="{ span: 10 }"
                  :wrapper-col="{ span: 14 }"
                  autocomplete="off"
                  @finish="reworkOnFinish"
                  @finishFailed="onFinishFailed"
              >
                <a-form-item
                    label="领片Cells Receive"
                    name="repairCellsReceive"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="reworkFormState.repairCellsReceive"/>
                </a-form-item>
                <a-form-item
                    label="修件Module repair"
                    name="moduleRepair"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="reworkFormState.moduleRepair"/>
                </a-form-item>

                <a-form-item
                    label="件破片Module scrap"
                    name="moduleScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="reworkFormState.moduleScrap"/>
                </a-form-item>

                <a-form-item
                    label="修串String repair"
                    name="stringRepair"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="reworkFormState.stringRepair"/>
                </a-form-item>

                <a-form-item
                    label="串破片String scrap"
                    name="stringScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="reworkFormState.stringScrap"/>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit">提交Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-col>

      </a-row>
      <a-divider style="border-color: #7cb305" dashed/>
      <a-row>
        <a-col :span="8">
          <div>
            <div>
              Second half
            </div>
            <div>
              <a-form
                  :model="secondHalfFormState"
                  name="secondHalfFormState"
                  :label-col="{ span: 13 }"
                  :wrapper-col="{ span: 11 }"
                  autocomplete="off"
                  @finish="secondHalfOnFinish"
                  @finishFailed="onFinishFailed"
              >
                <a-form-item
                    label="层后外观检查Visual inspection"
                    name="visualInspection"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.visualInspection"/>
                </a-form-item>

                <a-form-item
                    label="外观不良Inspection Defect"
                    name="visualInspectionDefect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.visualInspectionDefect"/>
                </a-form-item>

                <a-form-item
                    label="组框Framing"
                    name="framing"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.framing"/>
                </a-form-item>

                <a-form-item
                    label="组框不良Framing Defect"
                    name="framingDefect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.framingDefect"/>
                </a-form-item>

                <a-form-item
                    label="线盒焊接Jbox Welding"
                    name="jboxWelding"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.jboxWelding"/>
                </a-form-item>

                <a-form-item
                    label="焊接不良Welding Defect"
                    name="jboxWeldingDefect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.jboxWeldingDefect"/>
                </a-form-item>

                <a-form-item
                    label="清洗Cleaning"
                    name="cleaning"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.cleaning"/>
                </a-form-item>

                <a-form-item
                    label="清洗不良Cleaning Defect"
                    name="cleaningDefect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.cleaningDefect"/>
                </a-form-item>

                <a-form-item
                    label="层后EL"
                    name="secondEL"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.secondEL"/>
                </a-form-item>

                <a-form-item
                    label="层后EL不良"
                    name="secondELDefect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="secondHalfFormState.secondELDefect"/>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit">提交Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-col>
        <a-divider type="vertical" style="height: 600px; border-color: #7cb305" dashed/>
        <a-col :span="8">
          <div>
            <div>
              Stringer
            </div>
            <div>
              <a-form
                  :model="stringerFormState"
                  name="stringerFormState"
                  :label-col="{ span: 13 }"
                  :wrapper-col="{ span: 11 }"
                  autocomplete="off"
                  @finish="stringerOnFinish"
                  @finishFailed="onFinishFailed"
              >
                <a-form-item
                    label="Stringer#1 output"
                    name="stringer1"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.stringer1"/>
                </a-form-item>

                <a-form-item
                    label="Stringer#1 NG"
                    name="stringer1Defect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.stringer1Defect"/>
                </a-form-item>

                <a-form-item
                    label="Stringer#2 output"
                    name="stringer2"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.stringer2"/>
                </a-form-item>

                <a-form-item
                    label="Stringer#2 NG"
                    name="stringer2Defect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.stringer2Defect"/>
                </a-form-item>

                <a-form-item
                    label="Stringer#3 output"
                    name="stringer3"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.stringer3"/>
                </a-form-item>

                <a-form-item
                    label="Stringer#3 NG"
                    name="stringer3Defect"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.stringer3Defect"/>
                </a-form-item>

                <a-form-item
                    label="投产电池片Cells input"
                    name="cellsInput"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.cellsInput"/>
                </a-form-item>

                <a-form-item
                    label="开箱破片Open box broken"
                    name="openBoxBroken"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.openBoxBroken"/>
                </a-form-item>

                <a-form-item
                    label="焊机破片Cells broken by Stringer"
                    name="StringerBrokenCells"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="stringerFormState.StringerBrokenCells"/>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit">提交Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-col>
        <a-divider type="vertical" style="height: 600px; border-color: #7cb305" dashed/>
        <a-col :span="7">
          <div>
            <div>
              Others
            </div>
            <div>
              <a-form
                  :model="othersFormState"
                  name="othersFormState"
                  :label-col="{ span: 13 }"
                  :wrapper-col="{ span: 11 }"
                  autocomplete="off"
                  @finish="othersOnFinish"
                  @finishFailed="onFinishFailed"
              >
                <a-form-item
                    label="组件报废Panel scrap"
                    name="panelScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="othersFormState.panelScrap"/>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit">提交Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4">
      <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <a-calendar v-model:value="dateValue" :fullscreen="false" @panelChange="onPanelChange" @select="DateOnChange"/>
      </div>
      <div>
        <a-cascader
            size="large"
            v-model:value="shiftValue"
            :options="shiftOptions"
            expand-trigger="hover"
            placeholder="选择你的班别/shift selection"
            @change="ShiftOnChange"
        />
        <a-button type="primary" danger @click="lockOnClick" :disabled="isLock===1">锁定表格lock form</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>