<script setup>
import dayjs from 'dayjs';
import {message} from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
import axios from "axios";
import {CheckOutlined} from '@ant-design/icons-vue';

let dateValue = ref(dayjs());
let line1Value = ref([]);
let line2Value = ref([]);
let line2 = ref("line2");
let line1 = ref("line1");
let emptyIcon = ref(true);

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
  const month = (dateValue.value.$M + 1) <= 10 ? ("0" + (dateValue.value.$M + 1).toString()) : ((dateValue.value.$M + 1).toString())
  const day = (dateValue.value.$D) <= 10 ? ("0" + (dateValue.value.$D).toString()) : ((dateValue.value.$D).toString())
  return Number((dateValue.value.$y).toString() + month + day + "00");
}

DateOnChange(dateValue.value)

</script>

<template>


  <a-row>
    <a-col :span="18">
      <div style="background-color: #ececec; padding: 10px">
        <a-row :gutter="18">
          <a-col :span="12">
            <a-card title="New line" :bordered="false">
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
      <table class="tg1">
        <thead>
        <tr>
          <th class="tg-g7sd">日期</th>
          <th class="tg-yla0">电池片投入<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Input</th>
          <th class="tg-mla2">焊机产量<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Output</th>
          <th class="tg-mla2">返修领片</th>
          <th class="tg-yla0">总报废</th>
          <th class="tg-10jc">总报废率(0.5%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Scrap Rate</th>
          <th class="tg-tahg">来料破片<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incoming Material Scrap</th>
          <th class="tg-10jc">0.20%</th>
          <th class="tg-tahg">修串破片<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rework String Scrap</th>
          <th class="tg-10jc">0.11%</th>
          <th class="tg-tahg">组件破片<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rework Modules Scrap </th>
          <th class="tg-10jc">0.15%</th>
          <th class="tg-tahg">生产事故破片（撞板,撞串）<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Production Accident Scrap</th>
          <th class="tg-10jc">0.00%</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="tg-bobw">2023-08-01</td>
          <td class="tg-bobw">72337</td>
          <td class="tg-bobw">72000</td>
          <td class="tg-bobw">0</td>
          <td class="tg-bobw">337</td>
          <td class="tg-getq">0.47%</td>
          <td class="tg-bobw">8</td>
          <td class="tg-getq">0.01%</td>
          <td class="tg-bobw">110</td>
          <td class="tg-getq">0.15%</td>
          <td class="tg-bobw">75</td>
          <td class="tg-getq">0.10%</td>
          <td class="tg-bobw">144</td>
          <td class="tg-getq">0.20%</td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-02</td>
          <td class="tg-bobw">10</td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw">10</td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-03</td>
          <td class="tg-bobw">0</td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-04</td>
          <td class="tg-bobw">0</td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-05</td>
          <td class="tg-bobw">0</td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-06</td>
          <td class="tg-bobw">0</td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-txp9"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-txp9"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-txp9"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-txp9"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-txp9"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-07</td>
          <td class="tg-bobw">0</td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-08</td>
          <td class="tg-bobw">0</td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
          <td class="tg-8d8j"> </td>
        </tr>
        <tr>
          <td class="tg-bobw">2023-08-09</td>
          <td class="tg-bobw">0</td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
          <td class="tg-bobw"> </td>
          <td class="tg-getq"> </td>
        </tr>
        </tbody>
      </table>
      <div>ddddddddddddddd</div>
      <div>
        <table class="tg2">
          <thead>
          <tr>
            <th class="tg-g7sd" colspan="17" rowspan="2">组件生产日报 / Daily production&nbsp;&nbsp;&nbsp;report                       &nbsp;&nbsp;&nbsp;组件名称：Component Name 144-550</th>
          </tr>
          <tr>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="tg-wa1i">№</td>
            <td class="tg-amwm">人力&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persons </td>
            <td class="tg-amwm" colspan="4">站别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Station</td>
            <td class="tg-amwm">计划&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plan</td>
            <td class="tg-mezc">实绩 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actual</td>
            <td class="tg-amwm">达成率&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rate</td>
            <td class="tg-mezc" colspan="3">未达成原因&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reason not reached</td>
            <td class="tg-amwm">不良串    NG Strings</td>
            <td class="tg-mezc">不良率 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yield</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-wa1i" rowspan="3">1</td>
            <td class="tg-wa1i" rowspan="3">3</td>
            <td class="tg-amwm" colspan="3" rowspan="3">Welding       焊接</td>
            <td class="tg-10jc">1#</td>
            <td class="tg-wa1i">300</td>
            <td class="tg-10jc">122</td>
            <td class="tg-wa1i">41%</td>
            <td class="tg-10jc" colspan="3" rowspan="3">2号焊机/3号焊机关气状态工程师维修。</td>
            <td class="tg-wa1i">34</td>
            <td class="tg-k45d">4.64%</td>
            <td class="tg-ejev" colspan="3" rowspan="3"> &nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-10jc">2#</td>
            <td class="tg-wa1i">300</td>
            <td class="tg-10jc">145</td>
            <td class="tg-wa1i">48%</td>
            <td class="tg-wa1i">119</td>
            <td class="tg-k45d">13.68%</td>
          </tr>
          <tr>
            <td class="tg-10jc">3#</td>
            <td class="tg-wa1i">300</td>
            <td class="tg-10jc"> </td>
            <td class="tg-wa1i">0%</td>
            <td class="tg-wa1i"> </td>
            <td class="tg-k45d">#DIV/0!</td>
          </tr>
          <tr>
            <td class="tg-wa1i" rowspan="2">2</td>
            <td class="tg-wa1i" rowspan="2">6</td>
            <td class="tg-baqh" colspan="3" rowspan="2">Bus Bar Welding     .               <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;汇流条焊接</td>
            <td class="tg-ejev" rowspan="2">1#</td>
            <td class="tg-nrix" rowspan="2">600 </td>
            <td class="tg-ejev" rowspan="2">244</td>
            <td class="tg-nrix" rowspan="2">41%</td>
            <td class="tg-ejev" colspan="3" rowspan="2"></td>
            <td class="tg-nrix" rowspan="2"> <br></td>
            <td class="tg-ejev" rowspan="2">0.00%</td>
            <td class="tg-ejev" colspan="3" rowspan="2"> &nbsp;&nbsp;<br>&nbsp;&nbsp;</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td class="tg-wa1i">3</td>
            <td class="tg-wa1i">1</td>
            <td class="tg-baqh" colspan="4">El Test        EL检测</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">244</td>
            <td class="tg-nrix">41%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
            <td class="tg-nrix">64</td>
            <td class="tg-mwxe">26.23%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-wa1i">4</td>
            <td class="tg-wa1i">3</td>
            <td class="tg-amwm" colspan="4">Repair           返修</td>
            <td class="tg-wa1i">90</td>
            <td class="tg-10jc">64</td>
            <td class="tg-wa1i">71%</td>
            <td class="tg-10jc" colspan="3">返修串排5快组件/返修串96串</td>
            <td class="tg-yla0"> </td>
            <td class="tg-k45d">0.00%</td>
            <td class="tg-ejev" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix" rowspan="4">5</td>
            <td class="tg-nrix" rowspan="4">0</td>
            <td class="tg-baqh" colspan="3" rowspan="4">Laminating    层压</td>
            <td class="tg-nrix">1#</td>
            <td class="tg-nrix" rowspan="4">600</td>
            <td class="tg-nrix" rowspan="4">244</td>
            <td class="tg-nrix" rowspan="4">41%</td>
            <td class="tg-ejev" colspan="3" rowspan="4"> &nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;</td>
            <td class="tg-nrix" rowspan="4"> <br><br><br></td>
            <td class="tg-nrix" rowspan="4">0.00%</td>
            <td class="tg-ejev" colspan="3" rowspan="4"> &nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">2#</td>
          </tr>
          <tr>
            <td class="tg-nrix">3#</td>
          </tr>
          <tr>
            <td class="tg-nrix">4#</td>
          </tr>
          <tr>
            <td class="tg-nrix">6</td>
            <td class="tg-nrix"> </td>
            <td class="tg-baqh" colspan="4">Trimming Edge    削边</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">323</td>
            <td class="tg-nrix">54%</td>
            <td class="tg-ejev" colspan="3" rowspan="5"> &nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;</td>
            <td class="tg-cly1"></td>
            <td class="tg-mwxe">0.00%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">7</td>
            <td class="tg-nrix">1</td>
            <td class="tg-baqh" colspan="4">Visual inspection 外观检</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">323</td>
            <td class="tg-nrix">54%</td>
            <td class="tg-nrix">1</td>
            <td class="tg-mwxe">0.31%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">8</td>
            <td class="tg-nrix">1</td>
            <td class="tg-baqh" colspan="4">Group frame      组框</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">323</td>
            <td class="tg-nrix">54%</td>
            <td class="tg-nrix"></td>
            <td class="tg-mwxe">0.00%</td>
            <td class="tg-ejev" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">9</td>
            <td class="tg-nrix">3</td>
            <td class="tg-baqh" colspan="4">Junction box welding 盒</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">323</td>
            <td class="tg-nrix">54%</td>
            <td class="tg-nrix">2</td>
            <td class="tg-mwxe">0.62%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">10</td>
            <td class="tg-nrix">1</td>
            <td class="tg-baqh" colspan="4">Glue pouring     灌胶</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">323</td>
            <td class="tg-nrix">54%</td>
            <td class="tg-nrix"></td>
            <td class="tg-mwxe">0.00%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">13</td>
            <td class="tg-nrix">2</td>
            <td class="tg-baqh" colspan="4">Back Wash        背洗</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">250</td>
            <td class="tg-nrix">42%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
            <td class="tg-nrix"></td>
            <td class="tg-mwxe">0.00%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">15</td>
            <td class="tg-nrix"> </td>
            <td class="tg-baqh" colspan="4">Iv Test        IV测试</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">250</td>
            <td class="tg-nrix">42%</td>
            <td class="tg-ejev" colspan="3"> &nbsp;&nbsp;</td>
            <td class="tg-cly1"></td>
            <td class="tg-mwxe">0.00%</td>
            <td class="tg-ejev" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">16</td>
            <td class="tg-nrix"> </td>
            <td class="tg-baqh" colspan="4">Voltage withstand耐压</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">250</td>
            <td class="tg-nrix">42%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
            <td class="tg-8d8j"></td>
            <td class="tg-mwxe">0.00%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">17</td>
            <td class="tg-nrix">2</td>
            <td class="tg-baqh" colspan="4">El Test        EL检测</td>
            <td class="tg-nrix">600</td>
            <td class="tg-nrix">250</td>
            <td class="tg-nrix">42%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
            <td class="tg-nrix">5</td>
            <td class="tg-mwxe">2.00%</td>
            <td class="tg-nrix" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">18</td>
            <td class="tg-nrix">2</td>
            <td class="tg-baqh" colspan="4">Packing          包装</td>
            <td class="tg-nrix">600</td>
            <td class="tg-cly1"> </td>
            <td class="tg-nrix">0%</td>
            <td class="tg-ejev" colspan="3"> &nbsp;&nbsp;</td>
            <td class="tg-cly1"></td>
            <td class="tg-mwxe">#REF!</td>
            <td class="tg-ejev" colspan="3"> &nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">total</td>
            <td class="tg-nrix">31</td>
            <td class="tg-nrix" colspan="15"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td class="tg-nrix">1</td>
            <td class="tg-nrix">1</td>
            <td class="tg-baqh" colspan="4">Materials        物料</td>
            <td class="tg-ejev" colspan="10" rowspan="2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td class="tg-cly1"> </td>
          </tr>
          <tr>
            <td class="tg-nrix">2</td>
            <td class="tg-nrix">2</td>
            <td class="tg-baqh" colspan="4">Process leader 工序长</td>
            <td class="tg-cly1"> </td>
          </tr>
          </tbody>
        </table>
      </div>
      <a-empty v-if="emptyIcon"/>
      <div v-else>
        <div v-if="line2Value.length!==0">

        </div>
        <div v-if="line1Value.length!==0">

        </div>
      </div>

    </a-col>
    <a-col :span="4">
      <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <a-calendar v-model:value="dateValue" :fullscreen="false" @select="DateOnChange"/>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>
.tg1  {border-collapse:collapse;border-spacing:0;}
.tg1 td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg1 th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg1 .tg-tahg{background-color:#00B050;font-weight:bold;text-align:center;vertical-align:middle}
.tg1 .tg-txp9{color:#F00;text-align:center;vertical-align:bottom}
.tg1 .tg-getq{color:#F00;font-weight:bold;text-align:center;vertical-align:bottom}
.tg1 .tg-bobw{font-weight:bold;text-align:center;vertical-align:bottom}
.tg1 .tg-10jc{color:#F00;font-weight:bold;text-align:center;vertical-align:middle}
.tg1 .tg-g7sd{border-color:inherit;font-weight:bold;text-align:left;vertical-align:middle}
.tg1 .tg-yla0{font-weight:bold;text-align:left;vertical-align:middle}
.tg1 .tg-mla2{background-color:#00B050;font-weight:bold;text-align:left;vertical-align:middle}
.tg1 .tg-8d8j{text-align:center;vertical-align:bottom}

.tg2  {border-collapse:collapse;border-spacing:0;}
.tg2 td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg2 th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg2 .tg-cly1{text-align:left;vertical-align:middle}
.tg2 .tg-mwxe{text-align:right;vertical-align:middle}
.tg2 .tg-baqh{text-align:center;vertical-align:top}
.tg2 .tg-ejev{color:#F00;text-align:center;vertical-align:middle}
.tg2 .tg-10jc{color:#F00;font-weight:bold;text-align:center;vertical-align:middle}
.tg2 .tg-wa1i{font-weight:bold;text-align:center;vertical-align:middle}
.tg2 .tg-k45d{color:#F00;font-weight:bold;text-align:right;vertical-align:middle}
.tg2 .tg-g7sd{border-color:inherit;font-weight:bold;text-align:left;vertical-align:middle}
.tg2 .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg2 .tg-mezc{color:#F00;font-weight:bold;text-align:center;vertical-align:top}
.tg2 .tg-nrix{text-align:center;vertical-align:middle}
.tg2 .tg-yla0{font-weight:bold;text-align:left;vertical-align:middle}
.tg2 .tg-8d8j{text-align:center;vertical-align:bottom}
</style>