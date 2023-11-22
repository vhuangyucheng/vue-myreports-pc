<script setup>
import { reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
const useForm = Form.useForm;
const labelCol = {
  span: 4,
};
const wrapperCol = {
  span: 14,
};
const modelRef = reactive({
  name: '',
  region: undefined,
  type: [],
});
const rulesRef = reactive({
  name: [
    {
      required: true,
      message: 'Please input name',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select region',
    },
  ],
  type: [
    {
      required: true,
      message: 'Please select type',
      type: 'array',
    },
  ],
});
const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => console.log(...args),
});
const onSubmit = () => {
  validate()
      .then(() => {
        console.log(toRaw(modelRef));
      })
      .catch(err => {
        console.log('error', err);
      });
};
</script>

<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="领用" v-bind="validateInfos.name">
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="生产" v-bind="validateInfos.name">
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="报废" v-bind="validateInfos.name">
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="剩余" v-bind="validateInfos.name">
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="Activity zone" v-bind="validateInfos.region">
      <a-select v-model:value="modelRef.region" placeholder="please select your zone">
        <a-select-option value="电池">电池</a-select-option>
        <a-select-option value="玻璃">玻璃</a-select-option>
        <a-select-option value="边框">边框</a-select-option>
        <a-select-option value="硅胶">硅胶</a-select-option>
        <a-select-option value="背板">背板</a-select-option>
        <a-select-option value="EVA-">EVA</a-select-option>
      </a-select>
    </a-form-item>

<!--    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">-->
<!--      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>-->
<!--      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>-->
<!--    </a-form-item>-->
  </a-form>
</template>

<style scoped>

</style>