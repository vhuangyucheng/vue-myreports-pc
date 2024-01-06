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

let isLock = ref(0);
let shiftId;
const QRCodeFormState = reactive({
  QRCodeStart: '',
  QRCodeEnd: '',
  QRCodeAmount: '',
});

const materialFeedingFormState = reactive({
  glassOutput: '',
  glassDefect: '',
  evaglassOutput: '',
  evaglassDefect: '',
  backsheetOutput: '',
  backsheetDefect: '',
  evabacksheetOutput: '',
  evabacksheetDefect: '',
  highTemperatureTapeOutput: '',
});
const bussingFormState = reactive({
  bussingOutput: '',
  bussingMiswelding: '',
  bussingBadmargin: '',
  bussingBadstringspacing: '',
  bussingOthers: '',
});
const firstELFormState = reactive({
  firstEL1Output: '',
  firstEL2Output: '',
  firstEL2Defect: '',
});

const stringerFormState = reactive({
  stringer1Output: '',
  stringer1Miswelding: '',
  stringer1Overwelding: '',
  stringer1Split: '',
  stringer1Crack: '',
  stringer1Others: '',
  stringer1CellsCrack: '',
  stringer2Output: '',
  stringer2Miswelding: '',
  stringer2Overwelding: '',
  stringer2Split: '',
  stringer2Crack: '',
  stringer2Others: '',
  stringer2CellsCrack: '',
  stringer3Output: '',
  stringer3Miswelding: '',
  stringer3Overwelding: '',
  stringer3Split: '',
  stringer3Crack: '',
  stringer3Others: '',
  stringer3CellsCrack: '',
});

const firstHalfScarpFormState = reactive({
  cellsReceive: '',
  cellsInput: '',
  incomingScrap: '',
  repairScrap: '',
  incidentScrap: '',
  stringerScrap: '',
  cellsLeft: '',
  ribbonScrap: '',
  busbarScrap: '',
});

const laminationFormState = reactive({
  laminator1Output: '',
  laminator2Output: '',
  laminator3Output: '',
});

const trimmingFormState = reactive({
  trimmingOutput: ''
});

const framingFormState = reactive({
  framingOutput: '',
  framingScrap: ''
});

const secondELFormState = reactive({
  secondELOutput: '',
  ivDefect:'',
  hipotDefect:'',
  secondelDefect:'',
  packing:''
});

const secondHalfFormState = reactive({
  frameScrap: '',
  shortFrameScrap:'',
  framingGlueScrap: '',
  jboxScrap: '',
  sealantGlueScrap: '',
  cornerProtectionScrap: '',
  palletScrap: '',
  packingCartonScrap: '',
  packingStrapScrap: '',
  finishedgoodDegrade:'',
  finishedgoodScrap:'',
});

const labelOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      qrcodeStart: QRCodeFormState.QRCodeStart,
      qrcodeEnd: QRCodeFormState.QRCodeEnd,
      qrcodeAmount: QRCodeFormState.QRCodeAmount,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const bussingOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      bussingOutput: bussingFormState.bussingOutput,
      bussingMiswelding: bussingFormState.bussingMiswelding,
      bussingBadmargin: bussingFormState.bussingBadmargin,
      bussingBadstringspacing: bussingFormState.bussingBadstringspacing,
      bussingOthers: bussingFormState.bussingOthers,

    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const materialFeedingOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      glassOutput: materialFeedingFormState.glassOutput,
      glassDefect: materialFeedingFormState.glassDefect,
      evaglassOutput: materialFeedingFormState.evaglassOutput,
      evaglassDefect: materialFeedingFormState.evaglassDefect,
      backsheetOutput: materialFeedingFormState.backsheetOutput,
      backsheetDefect: materialFeedingFormState.backsheetDefect,
      evabacksheetOutput: materialFeedingFormState.evabacksheetOutput,
      evabacksheetDefect: materialFeedingFormState.evabacksheetDefect,
      highTemperatureTapeOutput: materialFeedingFormState.highTemperatureTapeOutput,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const stringerOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      stringer1Output: stringerFormState.stringer1Output,
      stringer1Miswelding: stringerFormState.stringer1Miswelding,
      stringer1Overwelding: stringerFormState.stringer1Overwelding,
      stringer1Split: stringerFormState.stringer1Split,
      stringer1Crack: stringerFormState.stringer1Crack,
      stringer1Others: stringerFormState.stringer1Others,
      stringer1CellsCrack: stringerFormState.stringer1CellsCrack,
      stringer2Output: stringerFormState.stringer2Output,
      stringer2Miswelding: stringerFormState.stringer2Miswelding,
      stringer2Overwelding: stringerFormState.stringer2Overwelding,
      stringer2Split: stringerFormState.stringer2Split,
      stringer2Crack: stringerFormState.stringer2Crack,
      stringer2Others: stringerFormState.stringer2Others,
      stringer2CellsCrack: stringerFormState.stringer2CellsCrack,
      stringer3Output: stringerFormState.stringer3Output,
      stringer3Miswelding: stringerFormState.stringer3Miswelding,
      stringer3Overwelding: stringerFormState.stringer3Overwelding,
      stringer3Split: stringerFormState.stringer3Split,
      stringer3Crack: stringerFormState.stringer3Crack,
      stringer3Others: stringerFormState.stringer3Others,
      stringer3CellsCrack: stringerFormState.stringer3CellsCrack,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const firstELOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      firstel2Output: firstELFormState.firstEL2Output,
      firstel2Defect: firstELFormState.firstEL2Defect,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const firstHalfOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      cellsReceive: firstHalfScarpFormState.cellsReceive,
      cellsInput: firstHalfScarpFormState.cellsInput,
      incomingScrap: firstHalfScarpFormState.incomingScrap,
      repairScrap: firstHalfScarpFormState.repairScrap,
      incidentScrap: firstHalfScarpFormState.incidentScrap,
      stringerScrap: firstHalfScarpFormState.stringerScrap,
      cellsLeft: firstHalfScarpFormState.cellsLeft,
      ribbonScrap: firstHalfScarpFormState.ribbonScrap,
      busbarScrap: firstHalfScarpFormState.busbarScrap,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const laminationOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      laminator1Output: laminationFormState.laminator1Output,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const trimmingOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      trimmingOutput: trimmingFormState.trimmingOutput,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const framingOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      framingOutput: framingFormState.framingOutput,
      framingScrap: framingFormState.framingScrap,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const secondELOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      secondelOutput: secondELFormState.secondELOutput,
      ivDefect: secondELFormState.ivDefect,
      hipotDefect: secondELFormState.hipotDefect,
      secondelDefect: secondELFormState.secondelDefect,
      packing: secondELFormState.packing,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const secondHalfOnFinish = values => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      framingScrap: secondHalfFormState.frameScrap,
      shortFrameScrap: secondHalfFormState.shortFrameScrap,
      framingGlueScrap: secondHalfFormState.framingGlueScrap,
      jboxScrap: secondHalfFormState.jboxScrap,
      sealantGlueScrap: secondHalfFormState.sealantGlueScrap,
      cornerProtectionScrap: secondHalfFormState.cornerProtectionScrap,
      palletScrap: secondHalfFormState.palletScrap,
      packingCartonScrap: secondHalfFormState.packingCartonScrap,
      packingStrap: secondHalfFormState.packingStrapScrap,
      finishedgoodDegrade: secondHalfFormState.finishedgoodDegrade,
      finishedgoodScrap: secondHalfFormState.finishedgoodScrap,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("提交成功 submit succeed", 4)
    } else {
      message.error("提交失败 submit failed")
    }
  })
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const lockOnClick = () => {
  if (undefined === shiftValue.value[1]) {
    message.error("提交前先选择班别 finish shift selection before submit", 3)
    return;
  }
  axios({
    url: "/apiStringer/shiftRecord/saveAndUpdate",
    method: "POST",
    data: {
      shiftId: getShiftId(),
      isLock: 1
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    if (response.data.code === '1') {
      message.success("锁定成功 Lock succeed", 4)
      isLock.value = 1;
    }
  })
};
const getShiftId = () => {
  const month = (dateValue.value.$M + 1) < 10 ? ("0" + (dateValue.value.$M + 1).toString()) : ((dateValue.value.$M + 1).toString())
  const day = (dateValue.value.$D ) < 10 ? ("0" + (dateValue.value.$D).toString()) : ((dateValue.value.$D).toString())
  return Number((dateValue.value.$y).toString() + month + day + (shiftValue.value[1].toString()));
}

const ShiftOnChange = (value) => {

  // let shiftIdParam = getShiftId();

  // console.log((dateValue.value.$y).toString())
  // console.log(month)
  // console.log((dateValue.value.$D).toString())
  // console.log((value[1].toString()))
  // console.log(shiftID);
  axios({
    url: "/apiStringer/shiftRecord/getShiftRecord",
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
    if (null === response.data.data) {
      message.info("这个班别暂时没有记录 This shift have no record yet")
      isLock.value = 0
      QRCodeFormState.QRCodeStart = ''
      QRCodeFormState.QRCodeEnd = ''
      QRCodeFormState.QRCodeAmount = ''
      materialFeedingFormState.glassOutput = ''
      materialFeedingFormState.glassDefect = ''
      materialFeedingFormState.evaglassOutput = ''
      materialFeedingFormState.evaglassDefect = ''
      materialFeedingFormState.backsheetOutput = ''
      materialFeedingFormState.backsheetDefect = ''
      materialFeedingFormState.evabacksheetOutput = ''
      materialFeedingFormState.evabacksheetDefect = ''
      materialFeedingFormState.highTemperatureTapeOutput = ''
      bussingFormState.bussingOutput = ''
      bussingFormState.bussingMiswelding = ''
      bussingFormState.bussingBadmargin = ''
      bussingFormState.bussingBadstringspacing = ''
      bussingFormState.bussingOthers = ''
      firstELFormState.firstEL1Output = ''
      firstELFormState.firstEL2Output = ''
      firstELFormState.firstEL2Defect = ''

      stringerFormState.stringer1Output = ''
      stringerFormState.stringer1Miswelding = ''
      stringerFormState.stringer1Overwelding = ''
      stringerFormState.stringer1Split = ''
      stringerFormState.stringer1Crack = ''
      stringerFormState.stringer1Others = ''
      stringerFormState.stringer1CellsCrack = ''
      stringerFormState.stringer2Output = ''
      stringerFormState.stringer2Miswelding = ''
      stringerFormState.stringer2Overwelding = ''
      stringerFormState.stringer2Split = ''
      stringerFormState.stringer2Crack = ''
      stringerFormState.stringer2Others = ''
      stringerFormState.stringer2CellsCrack = ''
      stringerFormState.stringer3Output = ''
      stringerFormState.stringer3Miswelding = ''
      stringerFormState.stringer3Overwelding = ''
      stringerFormState.stringer3Split = ''
      stringerFormState.stringer3Crack = ''
      stringerFormState.stringer3Others = ''
      stringerFormState.stringer3CellsCrack = ''

      firstHalfScarpFormState.cellsReceive = ''
      firstHalfScarpFormState.cellsInput = ''
      firstHalfScarpFormState.incomingScrap = ''
      firstHalfScarpFormState.repairScrap = ''
      firstHalfScarpFormState.incidentScrap = ''
      firstHalfScarpFormState.stringerScrap = ''
      firstHalfScarpFormState.cellsLeft = ''
      firstHalfScarpFormState.ribbonScrap = ''
      firstHalfScarpFormState.busbarScrap = ''

      laminationFormState.laminator1Output = ''
      laminationFormState.laminator2Output = ''
      laminationFormState.laminator3Output = ''

      trimmingFormState.trimmingOutput = ''

      framingFormState.framingOutput = ''

      secondELFormState.secondELOutput = ''
      secondELFormState.ivDefect = ''
      secondELFormState.hipotDefect = ''
      secondELFormState.secondelDefect = ''
      secondELFormState.packing = ''

      secondHalfFormState.frameScrap = ''
      secondHalfFormState.shortFrameScrap = ''
      secondHalfFormState.framingGlueScrap = ''
      secondHalfFormState.jboxScrap = ''
      secondHalfFormState.sealantGlueScrap = ''
      secondHalfFormState.cornerProtectionScrap = ''
      secondHalfFormState.palletScrap = ''
      secondHalfFormState.packingCartonScrap = ''
      secondHalfFormState.packingStrapScrap = ''
      secondHalfFormState.finishedgoodDegrade = ''
      secondHalfFormState.finishedgoodScrap = ''
      return;
    }
    shiftId = response.data.data.shiftId;
    isLock.value = response.data.data.isLock;
    QRCodeFormState.QRCodeStart = response.data.data.qrcodeStart
    QRCodeFormState.QRCodeEnd = response.data.data.qrcodeEnd
    QRCodeFormState.QRCodeAmount = response.data.data.qrcodeAmount
    materialFeedingFormState.glassOutput = response.data.data.glassOutput
    materialFeedingFormState.glassDefect = response.data.data.glassDefect
    materialFeedingFormState.evaglassOutput = response.data.data.evaglassOutput
    materialFeedingFormState.evaglassDefect = response.data.data.evaglassDefect
    materialFeedingFormState.backsheetOutput = response.data.data.backsheetOutput
    materialFeedingFormState.backsheetDefect = response.data.data.backsheetDefect
    materialFeedingFormState.evabacksheetOutput = response.data.data.evabacksheetOutput
    materialFeedingFormState.evabacksheetDefect = response.data.data.evabacksheetDefect
    materialFeedingFormState.highTemperatureTapeOutput = response.data.data.highTemperatureTapeOutput
    bussingFormState.bussingOutput = response.data.data.bussingOutput
    bussingFormState.bussingMiswelding = response.data.data.bussingMiswelding
    bussingFormState.bussingBadmargin = response.data.data.bussingBadmargin
    bussingFormState.bussingBadstringspacing = response.data.data.bussingBadstringspacing
    bussingFormState.bussingOthers = response.data.data.bussingOthers
    firstELFormState.firstEL1Output = response.data.data.firstel1Output
    firstELFormState.firstEL2Output = response.data.data.firstel2Output
    firstELFormState.firstEL2Defect = response.data.data.firstel2Defect

    stringerFormState.stringer1Output = response.data.data.stringer1Output
    stringerFormState.stringer1Miswelding = response.data.data.stringer1Miswelding
    stringerFormState.stringer1Overwelding = response.data.data.stringer1Overwelding
    stringerFormState.stringer1Split = response.data.data.stringer1Split
    stringerFormState.stringer1Crack = response.data.data.stringer1Crack
    stringerFormState.stringer1Others = response.data.data.stringer1Others
    stringerFormState.stringer1CellsCrack = response.data.data.stringer1CellsCrack
    stringerFormState.stringer2Output = response.data.data.stringer2Output
    stringerFormState.stringer2Miswelding = response.data.data.stringer2Miswelding
    stringerFormState.stringer2Overwelding = response.data.data.stringer2Overwelding
    stringerFormState.stringer2Split = response.data.data.stringer2Split
    stringerFormState.stringer2Crack = response.data.data.stringer2Crack
    stringerFormState.stringer2Others = response.data.data.stringer2Others
    stringerFormState.stringer2CellsCrack = response.data.data.stringer2CellsCrack
    stringerFormState.stringer3Output = response.data.data.stringer3Output
    stringerFormState.stringer3Miswelding = response.data.data.stringer3Miswelding
    stringerFormState.stringer3Overwelding = response.data.data.stringer3Overwelding
    stringerFormState.stringer3Split = response.data.data.stringer3Split
    stringerFormState.stringer3Crack = response.data.data.stringer3Crack
    stringerFormState.stringer3Others = response.data.data.stringer3Others
    stringerFormState.stringer3CellsCrack = response.data.data.stringer3CellsCrack

    firstHalfScarpFormState.cellsReceive = response.data.data.cellsReceive
    firstHalfScarpFormState.cellsInput = response.data.data.cellsInput
    firstHalfScarpFormState.incomingScrap = response.data.data.incomingScrap
    firstHalfScarpFormState.repairScrap = response.data.data.repairScrap
    firstHalfScarpFormState.incidentScrap = response.data.data.incidentScrap
    firstHalfScarpFormState.stringerScrap = response.data.data.stringerScrap
    firstHalfScarpFormState.cellsLeft = response.data.data.cellsLeft
    firstHalfScarpFormState.ribbonScrap = response.data.data.ribbonScrap
    firstHalfScarpFormState.busbarScrap = response.data.data.busbarScrap

    laminationFormState.laminator1Output = response.data.data.laminator1Output
    laminationFormState.laminator2Output = response.data.data.laminator2Output
    laminationFormState.laminator3Output = response.data.data.laminator3Output

    trimmingFormState.trimmingOutput = response.data.data.trimmingOutput

    framingFormState.framingOutput = response.data.data.framingOutput
    framingFormState.framingScrap = response.data.data.framingScrap

    secondELFormState.secondELOutput = response.data.data.secondelOutput
    secondELFormState.ivDefect = response.data.data.ivDefect
    secondELFormState.hipotDefect = response.data.data.hipotDefect
    secondELFormState.secondelDefect = response.data.data.secondelDefect
    secondELFormState.packing = response.data.data.packing

    secondHalfFormState.frameScrap = response.data.data.framingScrap
    secondHalfFormState.shortFrameScrap = response.data.data.shortFrameScrap
    secondHalfFormState.framingGlueScrap = response.data.data.framingGlueScrap
    secondHalfFormState.jboxScrap = response.data.data.jboxScrap
    secondHalfFormState.sealantGlueScrap = response.data.data.sealantGlueScrap
    secondHalfFormState.cornerProtectionScrap = response.data.data.cornerProtectionScrap
    secondHalfFormState.palletScrap = response.data.data.palletScrap
    secondHalfFormState.packingCartonScrap = response.data.data.packingCartonScrap
    secondHalfFormState.packingStrapScrap = response.data.data.packingStrap
    secondHalfFormState.finishedgoodDegrade = response.data.data.finishedgoodDegrade
    secondHalfFormState.finishedgoodScrap = response.data.data.finishedgoodScrap
  })
}
</script>

<template>
  <a-row>
    <a-col :span="12">
      <a-row>
        <a-col :span="24">
          <div>
            <h1 style="color: cornflowerblue">
              QR Code
            </h1>
            <div>
              <a-form
                  :model="QRCodeFormState"
                  name="QRCodeFormState"
                  :label-col="{ span: 12 }"
                  :wrapper-col="{ span: 12 }"
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
          </div>
        </a-col>
      </a-row>
<!--      <a-divider style="height: 2px; background-color: #7cb305"/>-->
<!--      <a-row>-->
<!--        <a-col :span="24">-->
<!--          <div>-->
<!--            <h1 style="color: cornflowerblue">-->
<!--              上料 Material Feeding A1-->
<!--            </h1>-->
<!--            <div>-->
<!--              <a-form-->
<!--                  :model="materialFeedingFormState"-->
<!--                  name="materialFeedingFormState"-->
<!--                  :label-col="{ span: 16 }"-->
<!--                  :wrapper-col="{ span: 8 }"-->
<!--                  autocomplete="off"-->
<!--                  @finish="materialFeedingOnFinish"-->
<!--                  @finishFailed="onFinishFailed"-->
<!--              >-->


<!--                <a-form-item-->
<!--                    label="玻璃不良数GlassDefect"-->
<!--                    name="glassDefect"-->
<!--                    :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--                >-->
<!--                  <a-input v-model:value="materialFeedingFormState.glassDefect"/>-->
<!--                </a-form-item>-->



<!--                <a-form-item-->
<!--                    label="EVA报废数（玻璃面）EVAScrap(glass side)(m2)"-->
<!--                    name="evaglassDefect"-->
<!--                    :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--                >-->
<!--                  <a-input v-model:value="materialFeedingFormState.evaglassDefect"/>-->
<!--                </a-form-item>-->



<!--                <a-form-item-->
<!--                    label="背板报废数backsheetScrap(m2)"-->
<!--                    name="backsheetDefect"-->
<!--                    :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--                >-->
<!--                  <a-input v-model:value="materialFeedingFormState.backsheetDefect"/>-->
<!--                </a-form-item>-->


<!--                <a-form-item-->
<!--                    label="EVA报废数（背板面）EVABacksheetScrap(m2)"-->
<!--                    name="evabacksheetDefect"-->
<!--                    :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--                >-->
<!--                  <a-input v-model:value="materialFeedingFormState.evabacksheetDefect"/>-->
<!--                </a-form-item>-->

<!--                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">-->
<!--                  <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>-->
<!--                </a-form-item>-->
<!--              </a-form>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a-col>-->
<!--      </a-row>-->
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <h1 style="color: cornflowerblue">
            串焊Stringer A2-1, A2-2, A2-3
          </h1>
          <a-form
              :model="stringerFormState"
              name="stringerFormState"
              :label-col="{ span: 16 }"
              :wrapper-col="{ span: 8 }"
              autocomplete="off"
              @finish="stringerOnFinish"
              @finishFailed="onFinishFailed"
          >
            <a-form-item
                label="1号焊机产出Stringer#1 output(strings)"
                name="stringer1Output"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1Output"/>
            </a-form-item>

            <a-form-item
                label="虚焊MisWelding(strings)"
                name="stringer1Miswelding"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1Miswelding"/>
            </a-form-item>

            <a-form-item
                label="过焊OverWelding(strings)"
                name="stringer1Overwelding"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1Overwelding"/>
            </a-form-item>

            <a-form-item
                label="破片Split(strings)"
                name="stringer1Split"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1Split"/>
            </a-form-item>

            <a-form-item
                label="隐裂MicroCrack(strings)"
                name="stringer1Crack"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1Crack"/>
            </a-form-item>

            <a-form-item
                label="其他Others(strings)"
                name="stringer1Others"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1Others"/>
            </a-form-item>

            <a-form-item
                label="电池片破片cells crack(piece)"
                name="stringer1CellsCrack"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer1CellsCrack"/>
            </a-form-item>

            <a-form-item
                label="2号焊机产出Stringer#2 output(strings)"
                name="stringer2Output"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2Output"/>
            </a-form-item>

            <a-form-item
                label="虚焊MisWelding(strings)"
                name="stringer2Miswelding"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2Miswelding"/>
            </a-form-item>

            <a-form-item
                label="过焊OverWelding(strings)"
                name="stringer2Overwelding"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2Overwelding"/>
            </a-form-item>

            <a-form-item
                label="破片Split(strings)"
                name="stringer2Split"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2Split"/>
            </a-form-item>

            <a-form-item
                label="隐裂MicroCrack(strings)"
                name="stringer2Crack"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2Crack"/>
            </a-form-item>

            <a-form-item
                label="其他Others(strings)"
                name="stringer2Others"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2Others"/>
            </a-form-item>

            <a-form-item
                label="电池片破片cells crack(piece)"
                name="stringer2CellsCrack"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer2CellsCrack"/>
            </a-form-item>


            <a-form-item
                label="3号焊机产出Stringer#3 output(strings)"
                name="stringer3Output"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3Output"/>
            </a-form-item>

            <a-form-item
                label="虚焊MisWelding(strings)"
                name="stringer3Miswelding"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3Miswelding"/>
            </a-form-item>

            <a-form-item
                label="过焊OverWelding(strings)"
                name="stringer3Overwelding"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3Overwelding"/>
            </a-form-item>

            <a-form-item
                label="破片Split(strings)"
                name="stringer3Split"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3Split"/>
            </a-form-item>

            <a-form-item
                label="隐裂MicroCrack(strings)"
                name="stringer3Crack"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3Crack"/>
            </a-form-item>

            <a-form-item
                label="其他Others(strings)"
                name="stringer3Others"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3Others"/>
            </a-form-item>

            <a-form-item
                label="电池片破片cells crack(piece)"
                name="stringer3CellsCrack"
                :rules="[{ required: true, message: '不能为空cannot empty' }]"
            >
              <a-input v-model:value="stringerFormState.stringer3CellsCrack"/>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <div>
            <h1 style="color: cornflowerblue">
              叠焊Bussing A3
            </h1>
            <div>
              <a-form
                  :model="bussingFormState"
                  name="bussingFormState"
                  :label-col="{ span: 16 }"
                  :wrapper-col="{ span: 8 }"
                  autocomplete="off"
                  @finish="bussingOnFinish"
                  @finishFailed="onFinishFailed"
              >
                <a-form-item
                    label="叠焊机输出Bussing Output"
                    name="bussingOutput"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="bussingFormState.bussingOutput"/>
                </a-form-item>
                <a-form-item
                    label="虚焊 MisWelding"
                    name="bussingMiswelding"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="bussingFormState.bussingMiswelding"/>
                </a-form-item>

                <a-form-item
                    label="边距不良BussingBadMargin"
                    name="bussingBadmargin"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="bussingFormState.bussingBadmargin"/>
                </a-form-item>

                <a-form-item
                    label="串间距不良BussingBadStringSpacing"
                    name="bussingBadstringspacing"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="bussingFormState.bussingBadstringspacing"/>
                </a-form-item>

                <a-form-item
                    label="其他others"
                    name="bussingOthers"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="bussingFormState.bussingOthers"/>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <h1 style="color: cornflowerblue">
            First EL A4
          </h1>
          <div>
            <a-form
                :model="firstELFormState"
                name="secondHalfFormState"
                :label-col="{ span: 16 }"
                :wrapper-col="{ span: 8 }"
                autocomplete="off"
                @finish="firstELOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="前道ELfirstEL"
                  name="firstEL2Output"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="firstELFormState.firstEL2Output"/>
              </a-form-item>

              <a-form-item
                  label="前道EL不良firstEL Defect"
                  name="firstEL2Defect"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="firstELFormState.firstEL2Defect"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <div>
            <h1 style="color: cornflowerblue">
              前道组长表格 Duty on first-half leader A0
            </h1>
            <div>
              <a-form
                  :model="firstHalfScarpFormState"
                  name="firstHalfScarpFormState"
                  :label-col="{ span: 10 }"
                  :wrapper-col="{ span: 14 }"
                  autocomplete="off"
                  @finish="firstHalfOnFinish"
                  @finishFailed="onFinishFailed"
              >
                <a-form-item
                    label="总领用(片)CellsReceive(piece)"
                    name="cellsReceive"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.cellsReceive"/>
                </a-form-item>
                <a-form-item
                    label="总投入数CellsInput"
                    name="cellsInput"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.cellsInput"/>
                </a-form-item>
                <a-form-item
                    label="焊机破片StringerScrap"
                    name="stringerScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.stringerScrap"/>
                </a-form-item>
                <a-form-item
                    label="来料破片incomingScrap"
                    name="incomingScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.incomingScrap"/>
                </a-form-item>
                <a-form-item
                    label="返修破片repairScrap"
                    name="repairScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.repairScrap"/>
                </a-form-item>
                <a-form-item
                    label="生产事故破片incidentScrap"
                    name="incidentScrap"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.incidentScrap"/>
                </a-form-item>
                <a-form-item
                    label="总剩余数cellsLeft"
                    name="cellsLeft"
                    :rules="[{ required: true, message: '不能为空cannot empty' }]"
                >
                  <a-input v-model:value="firstHalfScarpFormState.cellsLeft"/>
                </a-form-item>
<!--                <a-form-item-->
<!--                    label="焊带报废数ribbonScrap"-->
<!--                    name="ribbonScrap"-->
<!--                    :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--                >-->
<!--                  <a-input v-model:value="firstHalfScarpFormState.ribbonScrap"/>-->
<!--                </a-form-item>-->
<!--                <a-form-item-->
<!--                    label="汇流条报废数busbarScrap"-->
<!--                    name="busbarScrap"-->
<!--                    :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--                >-->
<!--                  <a-input v-model:value="firstHalfScarpFormState.busbarScrap"/>-->
<!--                </a-form-item>-->

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <h1 style="color: cornflowerblue">
            层压 Lamination B1
          </h1>
          <div>
            <a-form
                :model="laminationFormState"
                name="laminationFormState"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 14 }"
                autocomplete="off"
                @finish="laminationOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="层压机laminator"
                  name="laminator1Output"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="laminationFormState.laminator1Output"/>
              </a-form-item>


              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <h1 style="color: cornflowerblue">
            组框，线盒焊接 Framing B4 B5
          </h1>
          <div>
            <a-form
                :model="framingFormState"
                name="framingFormState"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 14 }"
                autocomplete="off"
                @finish="framingOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="组框产量FramingOutput"
                  name="framingOutput"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="framingFormState.framingOutput"/>
              </a-form-item>

              <a-form-item
                  label="组框不良FramingDefect"
                  name="framingScrap"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="framingFormState.framingScrap"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <h1 style="color: cornflowerblue">
            Final Test B8
          </h1>
          <div>
            <a-form
                :model="secondELFormState"
                name="secondELFormState"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 14 }"
                autocomplete="off"
                @finish="secondELOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="后道EL Second EL"
                  name="secondELOutput"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="secondELFormState.secondELOutput"/>
              </a-form-item>
              <a-form-item
                  label="IV不良IV Defect"
                  name="ivDefect"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="secondELFormState.ivDefect"/>
              </a-form-item>

              <a-form-item
                  label="后道EL不良 Second EL Defect"
                  name="secondelDefect"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="secondELFormState.secondelDefect"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
      <a-divider style="height: 2px; background-color: #7cb305"/>
      <a-row>
        <a-col :span="24">
          <h1 style="color: cornflowerblue">
            后道组长 Duty on second-half leader B0
          </h1>
          <div>
            <a-form
                :model="secondHalfFormState"
                name="secondHalfFormState"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 14 }"
                autocomplete="off"
                @finish="secondHalfOnFinish"
                @finishFailed="onFinishFailed"
            >

<!--              <a-form-item-->
<!--                  label="长边框报废Long FrameScrap:"-->
<!--                  name="frameScrap"-->
<!--                  :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--              >-->
<!--                <a-input v-model:value="secondHalfFormState.frameScrap"/>-->
<!--              </a-form-item>-->

<!--              <a-form-item-->
<!--                  label="短边框报废Short FrameScrap:"-->
<!--                  name="shortFrameScrap"-->
<!--                  :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--              >-->
<!--                <a-input v-model:value="secondHalfFormState.shortFrameScrap"/>-->
<!--              </a-form-item>-->

<!--              <a-form-item-->
<!--                  label="边框胶报废framingGlueScrap:"-->
<!--                  name="framingGlueScrap"-->
<!--                  :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--              >-->
<!--                <a-input v-model:value="secondHalfFormState.framingGlueScrap"/>-->
<!--              </a-form-item>-->

<!--              <a-form-item-->
<!--                  label="线盒报废jboxScrap:"-->
<!--                  name="jboxScrap"-->
<!--                  :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--              >-->
<!--                <a-input v-model:value="secondHalfFormState.jboxScrap"/>-->
<!--              </a-form-item>-->

<!--              <a-form-item-->
<!--                  label="AB胶报废sealantGlueScrap:"-->
<!--                  name="sealantGlueScrap"-->
<!--                  :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--              >-->
<!--                <a-input v-model:value="secondHalfFormState.sealantGlueScrap"/>-->
<!--              </a-form-item>-->

<!--              <a-form-item-->
<!--                  label="护角cornerProtectionScrap:"-->
<!--                  name="cornerProtectionScrap"-->
<!--                  :rules="[{ required: true, message: '不能为空cannot empty' }]"-->
<!--              >-->
<!--                <a-input v-model:value="secondHalfFormState.cornerProtectionScrap"/>-->
<!--              </a-form-item>-->

              <a-form-item
                  label="成品降级数量Finished Good degrade"
                  name="finishedgoodDegrade"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="secondHalfFormState.finishedgoodDegrade"/>
              </a-form-item>

              <a-form-item
                  label="成品报废数量Finished Good scrap"
                  name="finishedgoodScrap"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="secondHalfFormState.finishedgoodScrap"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :disabled="isLock===1">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="12">
      <a-row>
        <a-col :span="12">
          <div>
            <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
              <a-calendar v-model:value="dateValue" :fullscreen="false" @panelChange="onPanelChange"
                          @select="DateOnChange"/>
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
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>