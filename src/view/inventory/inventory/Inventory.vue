<script setup>

const activeKey = ref('1');

const mockData = ref([]);
const targetKeys = ref([]);
onMounted(() => {
  getMock();
});
const getMock = () => {
  const keys = [];
  const mData = [];
  let i = 0;
  const data = [{
    key: (++i).toString(),
    title: i,
    description: `电池`,
    chosen: Math.random() * 2 > 1,
  },{
    key: (++i).toString(),
    title: i,
    description: `胶水`,
    chosen: Math.random() * 2 > 1,
  },{
    key: (++i).toString(),
    title: i,
    description: `背板`,
    chosen: Math.random() * 2 > 1,
  },
  ];
  if (data.chosen) {
    keys.push(data.key);
  }
  mData.push(data);
  //all
  mockData.value = data;
  //right
  targetKeys.value = keys;
};
const handleChange = (keys, direction, moveKeys) => {
  console.log(keys, direction, moveKeys);
  console.log("ddd")
};
</script>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="A-Region">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="2" tab="B-Region">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="3" tab="C-Region">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="4" tab="D-Region">  <a-flex wrap="wrap" gap="small">
      <a-card title="a1" style="width: 600px">
        <template #extra><a href="#">more</a></template>
        <a-transfer
            v-model:target-keys="targetKeys"
            :data-source="mockData"
            :list-style="{
      width: '300px',
      height: '300px',
    }"
            @change="handleChange"
        >
          <template #render="item">
            <!--      <span class="custom-item" style="color: red">{{ item.title }} - {{ item.description }}</span>-->
            <div>has: {{ item.title }}</div>
            <a-input-search
                v-model:value="item.title"
                :enter-button="item.description"
                size="small"
                :maxlength="9"
                :style="{width: '150px' }"
            >
            </a-input-search>
          </template>

        </a-transfer>
      </a-card>
      <a-card title="b1" style="width: 600px">
        <template #extra><a href="#">more</a></template>
        <a-transfer
            v-model:target-keys="targetKeys"
            :data-source="mockData"
            :list-style="{
      width: '300px',
      height: '300px',
    }"
            @change="handleChange"
        >
          <template #render="item">
            <!--      <span class="custom-item" style="color: red">{{ item.title }} - {{ item.description }}</span>-->
            <div>has: {{ item.title }}</div>
            <a-input-search
                v-model:value="item.title"
                :enter-button="item.description"
                size="small"
                :maxlength="9"
                :style="{width: '150px' }"
            >
            </a-input-search>
          </template>

        </a-transfer>
      </a-card>
      <a-card title="c1" style="width: 600px">
        <template #extra><a href="#">more</a></template>
        <a-transfer
            v-model:target-keys="targetKeys"
            :data-source="mockData"
            :list-style="{
      width: '300px',
      height: '300px',
    }"
            @change="handleChange"
        >
          <template #render="item">
            <!--      <span class="custom-item" style="color: red">{{ item.title }} - {{ item.description }}</span>-->
            <div>has: {{ item.title }}</div>
            <a-input-search
                v-model:value="item.title"
                :enter-button="item.description"
                size="small"
                :maxlength="9"
                :style="{width: '150px' }"
            >
            </a-input-search>
          </template>

        </a-transfer>
      </a-card>
      <a-card title="d1" style="width: 600px">
        <template #extra><a href="#">more</a></template>
        <a-transfer
            v-model:target-keys="targetKeys"
            :data-source="mockData"
            :list-style="{
      width: '300px',
      height: '300px',
    }"
            @change="handleChange"
        >
          <template #render="item">
            <!--      <span class="custom-item" style="color: red">{{ item.title }} - {{ item.description }}</span>-->
            <div>has: {{ item.title }}</div>
            <a-input-search
                v-model:value="item.title"
                :enter-button="item.description"
                size="small"
                :maxlength="9"
                :style="{width: '150px' }"
            >
            </a-input-search>
          </template>

        </a-transfer>
      </a-card>
    </a-flex></a-tab-pane>
    <a-tab-pane key="5" tab="I-Region" >Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="6" tab="J-Region">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="7" tab="Others">Content of Tab Pane 3</a-tab-pane>

  </a-tabs>



</template>


<style scoped>
.a-input-search {
  width: 4px;
}
</style>