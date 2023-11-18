
<script setup>
</script>

<template>
  <a-row :gutter="16">
    <a-col :span="6">
      <a-statistic title="MO/ WO" :value="1128" style="margin-right: 50px">
        <template #suffix>
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="6">
      <a-statistic title="型号Product" :value="1128" style="margin-right: 50px">
        <template #suffix>
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="6">
      <a-statistic title="生产数量Quantity" :value="1128" style="margin-right: 50px">
        <template #suffix>
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="6">
      <a-statistic title="状态MO/ WO Status" :value="0" class="demo-class">
        <template #suffix>
          <span>生产中/ 关闭/ 其他 </span>
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>