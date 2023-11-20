<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
// import 'ant-design-vue/es/message/style/css'
import axios from "axios";
import {SmileOutlined, DownOutlined} from '@ant-design/icons-vue';

let searchReturnValue = ref("");
let reviewReturnValue = ref("");
const QRCodeFormState = reactive({
  defectId: 0,
  stationValue: '',
  shiftValue: '',
  qrcode: '',
  submitee: ''
})

const reviewFormState = reactive({
  dateValue: dayjs(),
  moduleModel: '',
  MO: '',
  location: '',
  description: '',
  judgementGrade: '',
  judger: '',
  remark: '',
})


const reviewOnFinish = values => {
  console.log(values)
  if (0 === QRCodeFormState.defectId) {
    message.error("提交前先查找条码 finish code search before submit", 3)
    return;
  }

  QRCodeFormState.QRCodeAmount = '';
  const month = (reviewFormState.dateValue.$M + 1) <= 10 ? ("0" + (reviewFormState.dateValue.$M + 1).toString()) : ((reviewFormState.dateValue.$M + 1).toString())

  axios({
    url: "/apiStringer/Defect/saveAndUpdate",
    method: "POST",
    data: {
      defectId: QRCodeFormState.defectId,
      reviewDate: Number((reviewFormState.dateValue.$y).toString() + month + (reviewFormState.dateValue.$D).toString()),
      mo: reviewFormState.MO,
      model: reviewFormState.moduleModel,
      defectLocation: reviewFormState.location,
      description: reviewFormState.description,
      grade: reviewFormState.judgementGrade,
      judger: reviewFormState.judger,
      remark: reviewFormState.remark,
      status: 0,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      reviewReturnValue.value = QRCodeFormState.qrcode + '评审成功 review succeed';
      QRCodeFormState.qrcode = ''
      QRCodeFormState.defectId = 0
      callNeedsReviewList();
      message.success("评审成功 review succeed", 4)

    } else {
      message.error("没有这个不良记录 no record with this qr code")
      reviewReturnValue.value = ''
    }
  })
};

const shiftLocationConvertion = {
  1: "旧线old line",
  2: "新线new line"
}

const shiftTimeConvertion = {
  1: "早班day",
  2: "晚班night",
  3: "深夜班NN"
}
const submitOnFinish = values => {
  searchReturnValue.value = QRCodeFormState.qrcode

  axios({
    url: "/apiStringer/Defect/getDefect",
    method: "POST",
    data: {
      qrcode: values.qrcode,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    console.log(response.data)
    if (response.data.code === '1') {
      searchReturnValue.value = QRCodeFormState.qrcode
      QRCodeFormState.stationValue = response.data.data.station
      QRCodeFormState.shiftValue = shiftLocationConvertion[response.data.data.shiftLocation] + "/" + shiftTimeConvertion[response.data.data.shiftTime]
      QRCodeFormState.qrcode = response.data.data.qrcode
      QRCodeFormState.submitee = response.data.data.submitee
      QRCodeFormState.defectId = response.data.data.defectId
      message.success("查找成功 search code succeed", 4)
    } else {
      message.error("没有这个不良记录 no record with this qr code")
      searchReturnValue.value = ''
    }
  })
};

const reviewButtonToSearch = item =>{
  console.log(item)
  QRCodeFormState.defectId= item.defectId;

  searchReturnValue.value = item.qrcode
  QRCodeFormState.stationValue = item.station.split("-----")[1]
  QRCodeFormState.shiftValue = item.station.split("-----")[0]
  QRCodeFormState.qrcode = item.qrcode
  QRCodeFormState.submitee = item.submitee
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
  message.error("提交失败 submit failed", 4)
};

const columns = [
  {
    title: 'submitee',
    dataIndex: 'submitee',
    key: 'submitee',
  },
  {
    title: 'station',
    dataIndex: 'station',
    key: 'station',
  },
  {
    title: 'qrcode',
    key: 'qrcode',
    dataIndex: 'qrcode',
  },

  {
    title: 'Action',
    key: 'action',
  },
];

let dataToReviewList = reactive([
  // {
  //   key: '1',
  //   submitee: 'John Brown',
  //   station: 'New York No. 1 Lake Park',
  //   qrcode: 'ddd',
  // },
  // {
  //   key: '2',
  //   submitee: 'Jim Green',
  //   station: 'London No. 1 Lake Park',
  //   qrcode: "dd",
  // },
  // {
  //   key: '3',
  //   submitee: 'Joe Black',
  //   station: 'Sidney No. 1 Lake Park',
  //   qrcode: 'dd',
  // },
]);

const callNeedsReviewList = () => {
  axios({
    url: "/apiStringer/Defect/ListOpenDefect",
    method: "POST",
    data: {},
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    console.log(response.data)
    let keyCounter = 1;
    const returnList = response.data.data;
    dataToReviewList.length = 0;
    returnList.forEach(item => {
      dataToReviewList.push({
        key: keyCounter++,
        defectId:item.defectId,
        submitee: item.submitee,
        station: shiftLocationConvertion[item.shiftLocation] + "/" + shiftTimeConvertion[item.shiftTime]+ "-----" + item.station+"/"+item.reason,
        qrcode:item.qrcode,
      })
    })
  })
}

callNeedsReviewList();
</script>

<template>
  <a-row>
    <a-col :span="24">
      <h1 style="color: cornflowerblue">
        Open Ticket
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
          >
            <a-input v-model:value="QRCodeFormState.submitee" disabled/>
          </a-form-item>

          <a-form-item
              label="工序和不良原因 Station And Reason"
              name="stationValue"
          >
            <a-input v-model:value="QRCodeFormState.stationValue" disabled/>
          </a-form-item>

          <a-form-item
              label="班别 Shift"
              name="shiftValue"
          >
            <a-input v-model:value="QRCodeFormState.shiftValue" disabled/>
          </a-form-item>

          <a-form-item
              label="条码扫码QRCode Scan"
              name="qrcode"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="QRCodeFormState.qrcode"/>
          </a-form-item>


          <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
            <a-button type="primary" html-type="submit">查找条码search code</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div style="color: #ed6484">
        {{ searchReturnValue !== "" ? (searchReturnValue + " successfully send to server") : "" }}
      </div>
    </a-col>
  </a-row>
  <a-divider style="height: 2px; background-color: #7cb305"/>
  <a-row>
    <a-col :span="24">
      <h1 style="color: cornflowerblue">
        IPQC Review
      </h1>
      <div>
        <a-form
            :model="reviewFormState"
            name="reviewFormState"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="reviewOnFinish"
            @finishFailed="onFinishFailed"
        >

          <a-form-item
              label="日期Date"
              name="dateValue"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-date-picker v-model:value="reviewFormState.dateValue"/>
          </a-form-item>

          <a-form-item
              label="组件类型ModuleModel"
              name="moduleModel"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="reviewFormState.moduleModel"/>
          </a-form-item>

          <a-form-item
              label="订单号MO"
              name="MO"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="reviewFormState.MO"/>
          </a-form-item>

          <a-form-item
              label="不良位置location"
              name="location"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="reviewFormState.location"/>
          </a-form-item>

          <a-form-item
              label="不良描述Description"
              name="description"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="reviewFormState.description"/>
          </a-form-item>

          <a-form-item
              label="判定等级JudgementGrade"
              name="judgementGrade"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <!--            <a-input v-model:value="reviewFormState.judgementGrade" />-->
            <a-radio-group v-model:value="reviewFormState.judgementGrade">
              <a-radio value="a">A</a-radio>
              <a-radio value="b">B</a-radio>
              <a-radio value="scrap">报废Scrap</a-radio>
              <a-radio value="rework">返修Rework</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item
              label="判定人Judger"
              name="judger"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="reviewFormState.judger"/>
          </a-form-item>

          <a-form-item
              label="备注Remark"
              name="remark"
              :rules="[{ required: true, message: '不能为空cannot empty' }]"
          >
            <a-input v-model:value="reviewFormState.remark"/>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
            <a-button type="primary" html-type="submit">提交Submit</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div style="color: #ed6484">
        {{ reviewReturnValue !== "" ? (reviewReturnValue + " successfully review") : "" }}
      </div>
    </a-col>
  </a-row>
  <a-divider style="height: 2px; background-color: #7cb305"/>
  <div>
    <a-table :columns="columns" :data-source="dataToReviewList">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'submitee'">
        <span>
          <smile-outlined/>
          Name
        </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'submitee'">
          <a>
            {{ record.submitee }}
          </a>
        </template>
        <template v-if="column.key === 'qrcode'">
          <a>
            {{ record.qrcode }}
          </a>
        </template>
        <template v-else-if="column.key === 'action'">
        <span>
          <a @click="reviewButtonToSearch(record)">Review</a>
          <!--          <a-divider type="vertical" />-->
          <!--          <a>Delete</a>-->
          <!--          <a-divider type="vertical" />-->
          <!--          <a class="ant-dropdown-link">-->
          <!--            More actions-->
          <!--            <down-outlined />-->
          <!--          </a>-->
        </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped>

</style>