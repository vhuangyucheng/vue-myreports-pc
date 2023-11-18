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
    dataIndex: 'Usage',
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
    item: 111,
    spec: 32,
    eachConsumption: `111`,
    eachLoss: `1111`,
    demand: `21111`,
  },
  {
    key: (++i).toString(),
    item: 22,
    spec: 22,
    eachConsumption: `2`,
    eachLoss: `22`,
    demand: `2222`,
  },
  {
    key: (++i).toString(),
    item: 33,
    spec: 333,
    eachConsumption: `3`,
    eachLoss: `333`,
    demand: `333`,
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