<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const FIRST_AMOUNT = 600;
const SECOND_AMOUNT = 600;
const THIRD_AMOUNT = 300;
const data = [
  {
    "product_type": "First",
    "sex": "input",
    "order_amt": FIRST_AMOUNT-444,
    "product_sub_type": "to target"
  },
  {
    "product_type": "First",
    "sex": "input",
    "order_amt": 444,
    "product_sub_type": "productivity"
  },


  {
    "product_type": "First",
    "sex": "mid",
    "order_amt": FIRST_AMOUNT - 452,
    "product_sub_type": "to target"
  },
  {
    "product_type": "First",
    "sex": "mid",
    "order_amt": 452,
    "product_sub_type": "productivity"
  },
  {
    "product_type": "First",
    "sex": "finished goods",
    "order_amt": FIRST_AMOUNT-419,
    "product_sub_type": "to target"
  },
  {
    "product_type": "First",
    "sex": "finished goods",
    "order_amt": 419,
    "product_sub_type": "productivity"
  },
  {
    "product_type": "Second",
    "sex": "input",
    "order_amt": SECOND_AMOUNT -510,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Second",
    "sex": "input",
    "order_amt": 510,
    "product_sub_type": "productivity"
  },


  {
    "product_type": "Second",
    "sex": "mid",
    "order_amt": SECOND_AMOUNT-502,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Second",
    "sex": "mid",
    "order_amt": 502,
    "product_sub_type": "productivity"
  },
  {
    "product_type": "Second",
    "sex": "finished goods",
    "order_amt": SECOND_AMOUNT-438,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Second",
    "sex": "finished goods",
    "order_amt": 438,
    "product_sub_type": "productivity"
  },
  {
    "product_type": "Third",
    "sex": "input",
    "order_amt": THIRD_AMOUNT-5,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Third",
    "sex": "input",
    "order_amt": 5,
    "product_sub_type": "productivity"
  },


  {
    "product_type": "Third",
    "sex": "mid",
    "order_amt": THIRD_AMOUNT - 93,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Third",
    "sex": "mid",
    "order_amt": 93,
    "product_sub_type": "productivity"
  },
  {
    "product_type": "Third",
    "sex": "finished goods",
    "order_amt": THIRD_AMOUNT - 267,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Third",
    "sex": "finished goods",
    "order_amt": 267,
    "product_sub_type": "productivity"
  }
]


onMounted(() => {
  const annotations = [];
  each(groupBy(data, 'product_sub_type'), (values, k) => {
    console.log(values)
    const value = values.reduce((a, b) => a.order_amt + b.order_amt, 0);
    annotations.push({
      type: 'text',
      position: [k, value],
      content: `${value}`,
      style: {textAlign: 'center', fontSize: 14, fill: 'rgba(0,0,0,0.85)'},
      offsetY: -10,
    });
  });
  console.log(annotations)
  const column = new Column('container12', {
    data,
    xField: 'product_type',
    yField: 'order_amt',
    isGroup: true,
    isStack: true,
    seriesField: 'product_sub_type',
    groupField: 'sex',

    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        { type: 'interval-adjust-position' },
        // 数据标签防遮挡
        { type: 'interval-hide-overlap' },
        // 数据标签文颜色自动调整
        { type: 'adjust-color' },
      ],
    },
    // 使用 annotation （图形标注）来展示：总数的 label
    annotations,
  });

  column.render();
})

</script>

<template>
  <div id="container12"/>
</template>


<style scoped>

</style>