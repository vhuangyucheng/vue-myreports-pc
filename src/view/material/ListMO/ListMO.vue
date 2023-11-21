<script setup>
import AddMO from "./AddMO.vue";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '10%',
  },
  {
    title: 'WIP/ FG/ Total',
    dataIndex: 'quantity',
    width: '20%',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: '10%',
  },
  {
    title: 'Info',
    dataIndex: 'info',
    width: '30%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '10%',
  },
  {
    title: 'Operation',
    dataIndex: 'Operation',
    width: '10%',
  },
];
const data = [
  {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  },
  {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  }, {
    name: "mo001",
    quantity: "2/5/100",
    type:"550w",
    status:"关闭",
    info:"common"
  },
]

const value1 = ref("a")
</script>

<template>
  <a-row>
    <a-col :span="3">
      <a-flex gap="middle" align="center" :vertical="false">
        <AddMO/>
      </a-flex>
    </a-col>
    <a-col :span="21">
      <a-flex gap="middle" align="center" :vertical="false">
        <div>
          <div>订单状态</div>
          <div>
            <a-radio-group v-model:value="value1" button-style="solid">
              <a-radio-button value="a">全部</a-radio-button>
              <a-radio-button value="b">未关闭</a-radio-button>
              <a-radio-button value="c">关闭</a-radio-button>
              <a-radio-button value="d">其他</a-radio-button>
            </a-radio-group>
          </div>
        </div>
        <div>
          <div>组件类型</div>
          <div>
            <a-radio-group v-model:value="value1" button-style="solid">
              <a-radio-button value="a1">全部</a-radio-button>
              <a-radio-button value="b1">550W</a-radio-button>
              <a-radio-button value="c1">535W</a-radio-button>
              <a-radio-button value="d1">410W</a-radio-button>
              <a-radio-button value="e1">其他</a-radio-button>
            </a-radio-group>
          </div>
        </div>
        <div>
          <div>流水线</div>
          <div>
            <a-radio-group v-model:value="value1" button-style="solid">
              <a-radio-button value="a3">全部</a-radio-button>
              <a-radio-button value="b3">#1</a-radio-button>
              <a-radio-button value="c3">#2</a-radio-button>
            </a-radio-group>
          </div>
        </div>
        <div>
          <a-input-search
              v-model:value="value"
              placeholder="input MO/WO"
              enter-button="Search"
              size="large"
              :maxlength="20"
              bordered
              @search="onSearch"
          />
        </div>
      </a-flex>
    </a-col>
  </a-row>
  <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 10 }"
      :scroll="{ y: 500 }"
  />
</template>

<style scoped>

</style>