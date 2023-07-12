<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';


let dataToShow = [] ;
let column;

self.setInterval(() => {
  axiosCall()
  console.log("timer")
}, 1000 * 60 );

function axiosCall() {
  let dataFromBack;
  let dataOutput = [];
  axios({
    url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetSummaryDataList",
    method: "GET",
    params: {
      // StartTime: "2023/7/7 8:00:00",
      // EndTime: "2023/7/9 20:00:00",
      TimesFlag: 7,
      MaxResultCount: 1000

    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    dataFromBack = response.data.result.items;
    // console.log(dataFromBack)
    dataFromBack.forEach(item => {
          dataOutput = [...dataOutput,
            {
              shift: item.ShiftValue,
              col_name: "layup",
              amount: parseInt(item.Layup),
              type: "productivity"
            },
            {
              shift: item.ShiftValue,
              col_name: "EL-1",
              amount: parseInt(item["EL-1"]),
              type: "productivity"
            },
            {
              shift: item.ShiftValue,
              col_name: "Framing&JB",
              amount: parseInt(item["Framing&JB"]),
              type: "productivity"
            },
            {
              shift: item.ShiftValue,
              col_name: "Sorting",
              amount: parseInt(item.Sorting),
              type: "productivity"
            }
          ]
        }
    )

    const FIRST_AMOUNT = 600;
    const SECOND_AMOUNT = 600;
    const THIRD_AMOUNT = 300;

    const dict = {
      Day: FIRST_AMOUNT,
      Night: SECOND_AMOUNT,
      NN: THIRD_AMOUNT,
    };
    const data2 = dataOutput.filter(item => (item.amount <= dict[item.shift])).map(item => ({
      ...item,
      amount: dict[item.shift] - item.amount,
      type: 'to target',
    }));
    // console.log(data2)

    dataToShow = [...data2, ...dataOutput]
    // console.log(dataToShow)
    column.changeData(dataToShow)

  });
}


axiosCall()
//render
// console.log(data)


onMounted(() => {
  column = new Column('container12', {
    data: dataToShow,
    xField: 'shift',
    yField: 'amount',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'col_name',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {type: 'interval-adjust-position'},
        // 数据标签防遮挡
        {type: 'interval-hide-overlap'},
        // 数据标签文颜色自动调整
        {type: 'adjust-color'},
      ],
    },
  });
  column.render();
  // console.log("onMount")
})

</script>

<template>
  <div id="container12"/>
</template>


<style scoped>

</style>