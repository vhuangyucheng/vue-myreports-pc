<script setup>
import axios from "axios";

import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';




let dataFromBack;
let dataOutput = [];

axios({
  url: "/apiMes/api/services/MES2RPT/ProductionReportData/GetSummaryDataList",
  method: "GET",
  params: {
    StartTime: "2023/7/7 8:00:00",
    EndTime: "2023/7/9 20:00:00",
    TimesFlag: 7,
    MaxResultCount: 1000

  },
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  dataFromBack = response.data.result.items;
  console.log(dataFromBack)
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
            amount: parseInt(item["Framing&JB"]),
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
  console.log(data2)

  const data = [...data2, ...dataOutput ]
  const column = new Column('container12', {
    data,
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
});


const data1 = [

  {
    "shift": "First",
    "col_name": "layup",
    "amount": 444,
    "type": "productivity"
  },

  {
    "shift": "First",
    "col_name": "framing",
    "amount": 452,
    "type": "productivity"
  },

  {
    "shift": "First",
    "col_name": "sorting",
    "amount": 419,
    "type": "productivity"
  },

  {
    "shift": "Second",
    "col_name": "layup",
    "amount": 510,
    "type": "productivity"
  },

  {
    "shift": "Second",
    "col_name": "framing",
    "amount": 502,
    "type": "productivity"
  },

  {
    "shift": "Second",
    "col_name": "sorting",
    "amount": 438,
    "type": "productivity"
  },

  {
    "shift": "Third",
    "col_name": "layup",
    "amount": 5,
    "type": "productivity"
  },


  {
    "shift": "Third",
    "col_name": "framing",
    "amount": 93,
    "type": "productivity"
  },

  {
    "shift": "Third",
    "col_name": "sorting",
    "amount": 267,
    "type": "productivity"
  }
];


onMounted(() => {
  // const annotations = [];
  // each(groupBy(data, 'type'), (values, k) => {
  //   const value = values.reduce((a, b) => a.amount + b.amount, 0);
  //   annotations.push({
  //     type: 'text',
  //     position: [k, value],
  //     content: `${value}`,
  //     style: {textAlign: 'center', fontSize: 14, fill: 'rgba(0,0,0,0.85)'},
  //     offsetY: -10,
  //   });
  // });

})

</script>

<template>
  <div id="container12"/>
</template>


<style scoped>

</style>