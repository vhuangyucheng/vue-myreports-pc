<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';
import axios from "axios";

let column;
let stringerNGRateColumn;
let NGList = ref([]);
let listFromBack;

function axiosCall() {
  axios({
    url: "/apiStringer/stringer/getString",
    method: "POST",
    data: {},
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    listFromBack = response.data
    // console.log(listFromBack);

    const groupedList = Object.values(listFromBack).flatMap(stringer =>
        Object.values(stringer).filter(obj => obj.hasOwnProperty("shiftName"))
    );
    // console.log(groupedList);

    let viewList = [];
    NGList.value = [];
    const shiftNames = groupedList.map(shift => {
      let aSide = {
        stringer: shift.shiftName.split("-")[1],
        shift: shift.shiftName.split("-")[0] + (": Stringer21, Stringer22, Stringer23"),
        type: "A",
        amount: shift.okstringA,
        NGRate: shift.ngstringA === 0 ? 0 : parseFloat((shift.ngstringA / (shift.okstringA + shift.ngstringA) * 100).toFixed(1))
      }
      let bSide = {
        stringer: shift.shiftName.split("-")[1],
        shift: shift.shiftName.split("-")[0] + (": Stringer21, Stringer22, Stringer23"),
        type: "B",
        amount: shift.okstringB,
        NGRate: shift.ngstringB === 0 ? 0 : parseFloat((shift.ngstringB / (shift.okstringB + shift.ngstringB) * 100).toFixed(1))
      }
      viewList.push(aSide, bSide);
      let NGRateA;
      let NGRateB;
      NGRateA = shift.ngstringA === 0 ? 0 : (shift.ngstringA / (shift.okstringA + shift.ngstringA) * 100).toFixed(1) + "%"
      NGRateB = shift.ngstringB === 0 ? 0 : (shift.ngstringB / (shift.okstringB + shift.ngstringB) * 100).toFixed(1) + "%"

      if (shift.ngstringB === 0) {

      }
      let NGMessage = shift.shiftName
          + " A : " + NGRateA + "      --------"
          + " B : " + NGRateB

      NGList.value.push(NGMessage)
      return shift
    });
    // console.log(viewList)
    column.changeData(viewList)
    stringerNGRateColumn.changeData(viewList)
    // console.log(viewList);
    // console.log(NGList.value);
    // console.log("stringer timer");
  })
}

axiosCall();
setInterval(axiosCall, 1000 * 60);

const data = [
  // {
  //   shift: "First", //第几个班： First, Second, Third //这里厂商设置只保存当前班别，比如在Third班别时候，需要帮忙缓存一下First, Second的数据
  //   stringer: "Stringer21", //String21, Stringer21, Stringer21, Stringer22, Stringer23, Stringer23
  //   amount: 444, //数量
  //   ng: 32, //ng数量
  //   type: "A", // A侧还是B侧, : A /B
  //   status: "up", //当前是：up/ down
  //   oee: "0.7", // 6:45以来， 正常运行时间 除以 总时间, 0~100
  // },
  //
  // {
  //   shift: "First",
  //   stringer: "Stringer22",
  //   amount: 452,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "First",
  //   stringer: "Stringer23",
  //   amount: 419,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Second",
  //   stringer: "Stringer21",
  //   amount: 510,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  //
  // {
  //   shift: "Second",
  //   stringer: "Stringer22",
  //   amount: 502,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Second",
  //   stringer: "Stringer23",
  //   amount: 438,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Third",
  //   stringer: "Stringer21",
  //   amount: 5,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Third",
  //   stringer: "Stringer22",
  //   amount: 93,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Third",
  //   stringer: "Stringer23",
  //   amount: 267,
  //   type: "A",
  //   status: "up",
  //   oee: "0.7",
  // },
  // {
  //   shift: "First",
  //   stringer: "Stringer21",
  //   amount: 444,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "First",
  //   stringer: "Stringer22",
  //   amount: 452,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "First",
  //   stringer: "Stringer23",
  //   amount: 419,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Second",
  //   stringer: "Stringer21",
  //   amount: 510,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  //
  // {
  //   shift: "Second",
  //   stringer: "Stringer22",
  //   amount: 502,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Second",
  //   stringer: "Stringer23",
  //   amount: 438,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Third",
  //   stringer: "Stringer21",
  //   amount: 5,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Third",
  //   stringer: "Stringer22",
  //   amount: 93,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // },
  //
  // {
  //   shift: "Third",
  //   stringer: "Stringer23",
  //   amount: 267,
  //   type: "B",
  //   status: "up",
  //   oee: "0.7",
  // }
]


onMounted(() => {
  const annotations = [];

  column = new Column('stringerOutput', {
    data: data,
    xField: 'shift',
    yField: 'amount',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'stringer',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // 数据标签防遮挡
        // {type: 'interval-hide-overlap'},
        // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },
    // 使用 annotation （图形标注）来展示：总数的 label
    annotations,
  });
  column.render();
  stringerNGRateColumn = new Column('stringerNGRate', {
    data: data,
    xField: 'shift',
    yField: 'NGRate',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'stringer',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // 数据标签防遮挡
        // {type: 'interval-hide-overlap'},
        // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },
    // 使用 annotation （图形标注）来展示：总数的 label
    annotations,
  });
  stringerNGRateColumn.render();
})

</script>

<template>
  <div>

    <!--    <div>-->
    <!--      <ul>-->
    <!--        <li v-for="item in NGList" :key="item.id">{{ item }}</li>-->
    <!--      </ul>-->
    <!--    </div>-->
    <div id="stringerOutput" :style="{height:'300px'}"/>
    <div>不良率 NG rate：</div>
    <div id="stringerNGRate" :style="{height:'300px'}"/>
  </div>
</template>


<style scoped>

</style>