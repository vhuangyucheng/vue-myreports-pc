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
  {
    title: 'operation',
    dataIndex: 'operation',
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

const handleAdd = () => {
  const newData = {
    key: (++i).toString(),
    item: 33,
    spec: 333,
    eachConsumption: `3`,
    eachLoss: `333`,
    demand: `333`,
  }
  dataSource.value.push(newData);
};

const dataSource = ref(data);
const editableData = reactive({});
const edit = key => {
  console.log(dataSource.value.filter(item => key === item.key)[0])
  editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
};
const save = key => {
  Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
  delete editableData[key];
};
const cancel = key => {
  delete editableData[key];
};

const metaDelete = key => {
  const indexToDelete = dataSource.value.findIndex(item => item.key === key);
  dataSource.value.splice(indexToDelete, 1);
}
</script>

<template>
  <div>
    <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button>
    <a-table :columns="columns" :data-source="dataSource" bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="['index', 'usage', 'item', 'spec', 'eachConsumption','eachLoss','demand'].includes(column.dataIndex)">
          <div>
            <a-input
                v-if="editableData[record.key]"
                v-model:value="editableData[record.key][column.dataIndex]"
                style="margin: -5px 0"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)">Save</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
            <span v-else>
            <a @click="edit(record.key)">Edit</a>
            <a @click="metaDelete(record.key)">Delete</a>
            </span>
          </div>
        </template>
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