<script setup>
import {ref} from "vue";

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    width: 100,
    fixed: 'left',
  },
  {
    title: '电池',
    children: [
      {
        title: '领用',
        dataIndex: 'receive',
        key: 'receive',
        width: 100,
      },
      {
        title: '生产',
        dataIndex: 'production',
        key: 'production',
        width: 100,
      },
      {
        title: '报废',
        dataIndex: 'scrapped',
        key: 'scrapped',
        width: 100,
      },
      {
        title: '剩余',
        dataIndex: 'remaining',
        key: 'remaining',
        width: 100,
      },
    ],
  },
  {
    title: '玻璃',
    children: [
      {
        title: '领用',
        dataIndex: 'receive',
        key: 'receive',
        width: 100,
      },
      {
        title: '生产',
        dataIndex: 'production',
        key: 'production',
        width: 100,
      },
      {
        title: '报废',
        dataIndex: 'scrapped',
        key: 'scrapped',
        width: 100,
      },
      {
        title: '剩余',
        dataIndex: 'remaining',
        key: 'remaining',
        width: 100,
      },
    ],
  },
  {
    title: '边框',
    children: [
      {
        title: '领用',
        dataIndex: 'receive',
        key: 'receive',
        width: 100,
      },
      {
        title: '生产',
        dataIndex: 'production',
        key: 'production',
        width: 100,
      },
      {
        title: '报废',
        dataIndex: 'scrapped',
        key: 'scrapped',
        width: 100,
      },
      {
        title: '剩余',
        dataIndex: 'remaining',
        key: 'remaining',
        width: 100,
      },
    ],
  },
  {
    title: '硅胶',
    children: [
      {
        title: '领用',
        dataIndex: 'receive',
        key: 'receive',
        width: 100,
      },
      {
        title: '生产',
        dataIndex: 'production',
        key: 'production',
        width: 100,
      },
      {
        title: '报废',
        dataIndex: 'scrapped',
        key: 'scrapped',
        width: 100,
      },
      {
        title: '剩余',
        dataIndex: 'remaining',
        key: 'remaining',
        width: 100,
      },
    ],
  },
  {
    title: '背板',
    children: [
      {
        title: '领用',
        dataIndex: 'receive',
        key: 'receive',
        width: 100,
      },
      {
        title: '生产',
        dataIndex: 'production',
        key: 'production',
        width: 100,
      },
      {
        title: '报废',
        dataIndex: 'scrapped',
        key: 'scrapped',
        width: 100,
      },
      {
        title: '剩余',
        dataIndex: 'remaining',
        key: 'remaining',
        width: 100,
      },
    ],
  },
  {
    title: 'EVA',
    children: [
      {
        title: '领用',
        dataIndex: 'receive',
        key: 'receive',
        width: 100,
      },
      {
        title: '生产',
        dataIndex: 'production',
        key: 'production',
        width: 100,
      },
      {
        title: '报废',
        dataIndex: 'scrapped',
        key: 'scrapped',
        width: 100,
      },
      {
        title: '剩余',
        dataIndex: 'remaining',
        key: 'remaining',
        width: 100,
      },
    ],
  },

];
const data = [...Array(50)].map((_, i) => ({
  date: "11/21/2023",
  receive: 232,
  production: 231,
  scrapped: 321,
  remaining: 21,

}));
</script>

<template>
  <a-table
      :columns="columns"
      :data-source="data"
      bordered
      size="middle"
      :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
  />
</template>
<style scoped>

</style>