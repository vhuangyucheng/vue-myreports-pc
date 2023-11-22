<script setup>
import {cloneDeep} from 'lodash-es';
import {reactive, ref} from 'vue';

const columns = [
  {
    title: '序号No',
    dataIndex: 'index',
    width: '10%',
  },
  {
    title: '材料名称Item',
    dataIndex: 'item',
    width: '10%',
  },
  {
    title: '规格Spec',
    dataIndex: 'spec',
    width: '45%',
  },
  {
    title: '单耗Consumption of Each Panel',
    dataIndex: 'eachConsumption',
    width: '10%',
  },
  {
    title: '损耗Loss of Each Panel',
    dataIndex: 'eachLoss',
    width: '10%',
  },
  {
    title: 'Usage(Consumption+Loss)/Pcs',
    dataIndex: 'usage',
    width: '10%',
  },
  {
    title: '材料需求量Material demand Amount',
    dataIndex: 'demand',
    width: '10%',
  },

];
let i = 0;
const data = [
  {
    key: (++i).toString(),
    index:1,
    item: "电池片",
    spec: "23.5, unit:pcs",
    eachConsumption: 72,
    eachLoss: '0.50%',
    usage:72.3600,
    demand: 27390,
  },
  {
    key: (++i).toString(),
    index:2,
    item: "玻璃",
    spec: "part number: 1002CS227211001, 2272mm*1128mm*3.2mm, unit:pcs",
    eachConsumption: 1,
    eachLoss: '0.02%',
    usage:1.0002,
    demand: 3011,
  },
  {
    key: (++i).toString(),
    index:3,
    item: "边框",
    spec: "part number: 1007YY227835001, 2278mm*35mm*35mm, unit:pcs",
    eachConsumption: 2,
    eachLoss: '0.1%',
    usage:2.0020,
    demand: 6026,
  },
  {
    key: (++i).toString(),
    index:4,
    item: "硅胶",
    spec: "part number: 1013HT906275001, HT906Z 270KG / barrel, unit:pcs",
    eachConsumption: 0.298,
    eachLoss: '2.00%',
    usage:0.3040,
    demand: 915,
  },
  {
    key: (++i).toString(),
    index:5,
    item: "接线盒",
    spec: "part number: 1008su140012001, 1400mm,pv-JB12x, mc4, unit:pcs",
    eachConsumption: 1,
    eachLoss: '0.01%',
    usage:1.0001,
    demand: 3010,
  },
];

const dataSource = ref(data);
</script>

<template>
  <div>
    <a-table :columns="columns" :data-source="dataSource" bordered>
      <template #bodyCell="{ column, text, record }">
              {{ text }}
        </template>
    </a-table>
  </div>
</template>

<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>

<style lang="less" scoped>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  margin-top: 4px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>