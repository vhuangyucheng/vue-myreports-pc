<script setup>
import AddMO from "./AddMO.vue";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [...Array(100)].map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const value1=ref("a")
</script>

<template>
  <a-row>
    <a-col :span="6">
      <a-flex gap="middle" align="center" :vertical="false">
        <div>
          ddd
        </div>
        <AddMO/>
      </a-flex>
    </a-col>
    <a-col :span="18">

      <div>订单状态</div>
      <div>
        <a-radio-group v-model:value="value1" button-style="solid">
          <a-radio-button value="a">Hangzhou</a-radio-button>
          <a-radio-button value="b">Shanghai</a-radio-button>
          <a-radio-button value="c">Beijing</a-radio-button>
          <a-radio-button value="d">Chengdu</a-radio-button>
        </a-radio-group>
      </div>

    </a-col>
  </a-row>
  <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 50 }"
      :scroll="{ y: 500 }"
  />
</template>

<style scoped>

</style>