<script setup>
import {Column} from '@antv/g2plot';
import {each, groupBy} from '@antv/util';

const data = [
  {
    "product_type": "Monday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Monday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Monday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Monday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Monday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Monday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
  {
    "product_type": "Tuesday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Tuesday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Tuesday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Tuesday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Tuesday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Tuesday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
  {
    "product_type": "Wednesday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Wednesday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Wednesday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Wednesday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Wednesday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Wednesday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
  {
    "product_type": "Thursday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Thursday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Thursday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Thursday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Thursday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Thursday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
  {
    "product_type": "Friday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Friday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Friday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Friday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Friday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Friday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
  {
    "product_type": "Saturday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Saturday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Saturday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Saturday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Saturday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Saturday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
  {
    "product_type": "Sunday",
    "sex": "input",
    "order_amt": 80,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Sunday",
    "sex": "input",
    "order_amt": 300,
    "product_sub_type": "output"
  },


  {
    "product_type": "Sunday",
    "sex": "mid",
    "order_amt": 21,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Sunday",
    "sex": "mid",
    "order_amt": 350,
    "product_sub_type": "output"
  },
  {
    "product_type": "Sunday",
    "sex": "finished goods",
    "order_amt": 28,
    "product_sub_type": "to target"
  },
  {
    "product_type": "Sunday",
    "sex": "finished goods",
    "order_amt": 261,
    "product_sub_type": "output"
  },
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