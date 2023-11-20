<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
// import 'ant-design-vue/es/message/style/css'
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

let returnValue = ref("");
const QRCodeFormState = reactive({
  stationValueInitial: [],
  shiftValueInitial: [],
  shiftValue: '',
  stationValue: '',
  QRCode: '',
  submitee: '',
  stationOptions: [{
    value: '10',
    label: '叠焊机Auto bussing',
    children: [
      {
        value: '叠焊机Auto bussing-虚焊MisWelded',
        label: '虚焊MisWelded',
      },
      {
        value: '叠焊机Auto bussing-边距不良BadMargins',
        label: '边距不良BadMargins',
      },
      {
        value: '叠焊机Auto bussing-串间距不良BadStringSpacing',
        label: '串间距不良BadStringSpacing',
      },
      {
        value: '叠焊机Auto bussing-其他Others',
        label: '其他Others',
      },
    ],
  }, {
    value: '20',
    label: 'First EL',
    children: [{
      value: 'First EL-破片Split',
      label: '破片Split',
    },
      {
        value: 'First EL-隐裂Crack',
        label: '隐裂Crack',
      },
      {
        value: 'First EL-虚焊MisWelded',
        label: '虚焊MisWelded',
      },
      {
        value: 'First EL-混档MixedFile',
        label: '混档MixedFile',
      },
      {
        value: 'First EL-短路Short',
        label: '短路Short',
      },
      {
        value: 'First EL-过焊OverWelding',
        label: '过焊OverWelding',
      },
      {
        value: 'First EL-其他Others',
        label: '其他Others',
      },
    ],
  }, {
    value: '30',
    label: '层压Lamination',
    children: [{
      value: '层压Lamination-爆板PanelBurst',
      label: '爆板PanelBurst',
    },
      {
        value: '层压Lamination-气泡Bubble',
        label: '气泡Bubble',
      },
      {
        value: '层压Lamination-背板褶皱BacksheetRuffle',
        label: '背板褶皱BacksheetRuffle',
      },
      {
        value: '层压Lamination-其他Others',
        label: '其他Others',
      }
    ],
  }, {
    value: '40',
    label: '削边Trimming',
    children: [{
      value: '削边Trimming-爆板PanelBurst',
      label: '爆板PanelBurst',
    },
      {
        value: '削边Trimming-边缘不齐RaggedEdges',
        label: '边缘不齐RaggedEdges',
      },
      {
        value: '削边Trimming-削边残留TrimmingResidue',
        label: '削边残留TrimmingResidue',
      },
      {
        value: '削边Trimming-其他Others',
        label: '其他Others',
      }
    ],
  }, {
    value: '50',
    label: '外观检VQC',
    children: [{
      value: '外观检VQC-并片NoGapsBetweenCells',
      label: '并片NoGapsBetweenCells',
    },
      {
        value: '外观检VQC-边距不良BadMargins',
        label: '边距不良BadMargins',
      },
      {
        value: '外观检VQC-色差ColorDifference',
        label: '色差ColorDifference',
      },
      {
        value: '外观检VQC-异物ForeignBody',
        label: '异物ForeignBody',
      },
      {
        value: '外观检VQC-其他Others',
        label: '其他Others',
      }
    ],
  }, {
    value: '60',
    label: '组框Framing',
    children: [{
      value: '组框Framing-爆板PanelBurst',
      label: '爆板PanelBurst',
    },
      {
        value: '组框Framing-爆框FrameBurst',
        label: '爆框FrameBurst',
      },
      {
        value: '组框Framing-错位Dislocation',
        label: '错位Dislocation',
      },
      {
        value: '组框Framing-异物ForeignBody',
        label: '异物ForeignBody',
      },
      {
        value: '组框Framing-其他Others',
        label: '其他Others',
      }
    ],
  }, {
    value: '70',
    label: '线盒安装焊接jboxInstallation',
    children: [{
      value: '线盒安装焊接jboxInstallation-安装不良BadInstallation',
      label: '安装不良BadInstallation',
    },
      {
        value: '线盒安装焊接jboxInstallation-焊接不良BadWelding',
        label: '焊接不良BadWelding',
      }
    ],
  }, {
    value: '80',
    label: 'SecondEL',
    children: [{
      value: 'SecondEL-破片Split',
      label: '破片Split',
    },
      {
        value: 'SecondEL-隐裂Crack',
        label: '隐裂Crack',
      },
      {
        value: 'SecondEL-虚焊MisWelded',
        label: '虚焊MisWelded',
      },
      {
        value: 'SecondEL-混档MixedFile',
        label: '混档MixedFile',
      },
      {
        value: 'SecondEL-短路Short',
        label: '短路Short',
      },
      {
        value: 'SecondEL-过焊OverWelding',
        label: '过焊OverWelding',
      },
      {
        value: 'SecondEL-其他Others',
        label: '其他Others',
      },
    ],
  }]
});


const submitOnFinish = values => {
  console.log(values)
  let status = 1;
  if(values.stationValue.split("-")[0] ==='叠焊机Auto bussing' || values.stationValue.split("-")[0] ==='First EL' )
    status = 0
  axios({
    url: "/apiStringer/Defect/saveAndUpdate",
    method: "POST",
    data: {
      qrcode: values.QRCodeAmount,
      shiftLocation: Number(values.shiftValue) / 10,
      shiftTime: Number(values.shiftValue) % 10,
      station: values.stationValue.split("-")[0],
      reason: values.stationValue.split("-")[1],
      submitee: values.submitee,
      status:status,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      returnValue.value = QRCodeFormState.QRCodeAmount
      message.success("提交成功 submit succeed", 4)
      QRCodeFormState.QRCodeAmount = '';
    } else {
      message.error("提交失败 submit failed")
    }
  })

};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
  message.error("提交失败 submit failed", 4)
};

const shiftOnChange = (value) => {
  // console.log(value)
  if (undefined === value) {
    QRCodeFormState.shiftValue = ''
  }
  QRCodeFormState.shiftValue = value[1]
}

const stationOnChange = (value) => {
  // console.log(value)
  if (undefined === value) {
    QRCodeFormState.stationValue = ''
  }
  QRCodeFormState.stationValue = value[1]
}

</script>

<template>
  <a-row>
    <a-col :span="24">
      <h1 style="color: cornflowerblue">
        Defect Input
      </h1>
      <div>
        <a-form
            :model="QRCodeFormState"
            name="QRCodeFormState"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="submitOnFinish"
            @finishFailed="onFinishFailed"
        >

          <a-form-item
              label="提交人submitee"
              name="submitee"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="QRCodeFormState.submitee"/>
          </a-form-item>

          <a-form-item
              label="选择班别 Shift Selection"
              name="shiftValue"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <!--                <a-input v-model:value="QRCodeFormState.QRCodeEnd"/> -->
            <a-cascader
                size="large"
                v-model:value="QRCodeFormState.shiftValueInitial"
                :options="shiftOptions"
                expand-trigger="hover"
                placeholder="选择班别 Shift Selection"
                @change="shiftOnChange"
            />
          </a-form-item>

          <a-form-item
              label="工序和不良原因 Station And Reason Selection"
              name="stationValue"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <!--                <a-input v-model:value="QRCodeFormState.QRCodeEnd"/> -->
            <a-cascader
                size="large"
                v-model:value="QRCodeFormState.stationValueInitial"
                :options="QRCodeFormState.stationOptions"
                expand-trigger="hover"
                placeholder="选择工序和不良原因 Station And Reason Selection"
                @change="stationOnChange"
            />
          </a-form-item>

          <a-form-item
              label="条码扫码QRCode Scan"
              name="QRCodeAmount"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="QRCodeFormState.QRCodeAmount"/>
          </a-form-item>


          <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
            <a-button type="primary" html-type="submit">提交Submit</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div>
        {{ returnValue !== "" ? (returnValue + " successfully send to server") : "" }}
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>