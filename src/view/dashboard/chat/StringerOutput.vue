<script setup>
import {Column} from '@antv/g2plot';
import axios from "axios";

let column;
let NGArray = ref([]);
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
        Object.values(stringer).filter(obj => (obj.hasOwnProperty("shiftName")&& obj.shiftName.includes('Day')))
    );
    console.log(groupedList);

    let viewList = [];
    NGArray.value = [];
    const shiftNames = groupedList.map(shift => {
      let aSide = {
        stringer: shift.shiftName.split("-")[1],
        type: "A",
        amount: shift.okstringA,
        NGRate: shift.ngstringA === 0 ? 0 : parseFloat((shift.ngstringA / (shift.okstringA + shift.ngstringA) * 100).toFixed(1))
      }
      let bSide = {
        stringer: shift.shiftName.split("-")[1],
        type: "B",
        amount: shift.okstringB,
        NGRate: shift.ngstringB === 0 ? 0 : parseFloat((shift.ngstringB / (shift.okstringB + shift.ngstringB) * 100).toFixed(1))
      }
      viewList.push(aSide, bSide);
      let NGRateA;
      let NGRateB;
      NGRateA = shift.ngstringA === 0 ? 0 : (shift.ngstringA / (shift.okstringA + shift.ngstringA) * 100).toFixed(1) + "%"
      NGRateB = shift.ngstringB === 0 ? 0 : (shift.ngstringB / (shift.okstringB + shift.ngstringB) * 100).toFixed(1) + "%"
      NGArray.value.push(NGRateA)
      NGArray.value.push(NGRateB)
      return shift
    });
    // console.log(viewList)
    column.changeData(viewList)

  })
}

axiosCall();
setInterval(axiosCall, 1000 * 60);

const data = [
]


onMounted(() => {
  const annotations = [];

  column = new Column('stringerOutput', {
    data: data,
    xField: 'stringer',
    yField: 'amount',
    // isGroup: true,
    isStack: true,
    seriesField: 'type',
    xAxis: {
      label: {
        style: {
          fontSize: 30, // Adjust y-axis label font size
          fontWeight: 'bold',
        }
      }
    },
    yAxis: {
      label: {
        style: {
          fontSize: 23, // Adjust y-axis label font size
          fontWeight: 'bold',
        }
      }
    },
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

})

</script>

<template>
  <div>

    <a-row>
      <a-col :span="12">
        <div>
          <div><div id="chartTitle">Stringer productivity(A/B side) 串焊机生产力(包含A侧B侧）</div></div>
          <div id="stringerOutput" :style="{height:'300px'}"/>
        </div>
      </a-col>

      <a-divider type="vertical" style="height: 350px; background-color: #7cb305" />

      <a-col :span="11">
        <div>
          <div id="chartTitle">Stringer NG rate(by string)(A/B side)焊机不良率(按串统计)(包含A侧B侧)：</div>
          <div style="background-color: #ececec; padding: 20px">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card title="Stringer01" :bordered="false">
                  <p>A : {{NGArray[0]}}</p>
                  <p>B : {{NGArray[1]}}</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Stringer02" :bordered="false">
                  <p>A : {{NGArray[2]}}</p>
                  <p>B : {{NGArray[3]}}</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Stringer03" :bordered="false">
                  <p>A : {{NGArray[4]}}</p>
                  <p>B : {{NGArray[5]}}</p>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
    </a-row>



  </div>
</template>


<style scoped>
#chartTitle {
  font-weight: bold;
  font-size: 25px;
  text-shadow: 0px 0px 0px
}
</style>