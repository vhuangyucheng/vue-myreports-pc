<script setup>
import dayjs from 'dayjs';

const options = [{
  value: 'line1',
  label: '旧线old line',
  children: [{
    value: 'line1-day',
    label: '旧线早班old line-Day',
  },
    {
      value: 'line1-night',
      label: '旧线晚班old line-Night',
    },
    {
      value: 'line1-NN',
      label: '旧线深晚班old line-NN',
    },

  ],
}, {
  value: 'line2',
  label: '新线new line',
  children: [{
    value: 'line2-day',
    label: '新线早班new line-Day',
  },
    {
      value: 'line2-night',
      label: '新线晚班new line-Night',
    },
    {
      value: 'line2-NN',
      label: '新线深晚班new line-NN',
    },

  ],
},];
const shiftValue = ref([]);
let dateValue = ref(dayjs());

const onPanelChange = (day) => {
  console.log("onPanelChange" + day)
}

const DateOnChange = (day) => {
  dateValue.value = day
  console.log(dateValue.value);
}

const ShiftOnChange = (value) => {
  console.log(value)
  console.log(dateValue.value);
}

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const labelOnFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

</script>

<template>
  <a-row>
    <a-col :span="20">
      <a-row>
        <a-col :span="8">
          <div>
            QR Code
          </div>
          <div>
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                @finish="labelOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="条码开始QRCodeStart"
                  name="QRCodeStart"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item
                  label="条码结束QRCodeEnd"
                  name="QRCodeEnd"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item
                  label="条码数量 amount"
                  name="QRCodeAmount"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-divider type="vertical" style="height: 200px; border-color: #7cb305" dashed/>
        <a-col :span="8">
          <div>
            QR Code
          </div>
          <div>
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 14 }"
                autocomplete="off"
                @finish="labelOnFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="层前EL产出FirstEL output "
                  name="1stELOutput"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item
                  label="不良defect"
                  name="1stELDefect"
                  :rules="[{ required: true, message: '不能为空cannot empty' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">提交Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-divider type="vertical" style="height: 60px; border-color: #7cb305" dashed/>
        <a-col :span="6">
          <div>
            gooooooooood
          </div>
        </a-col>

      </a-row>
      <a-divider style="border-color: #7cb305" dashed/>
      <a-row>
        <a-col :span="8">
          <div>
            <div>
              gooooooooood
            </div>

          </div>
        </a-col>
        <a-divider type="vertical" style="height: 60px; border-color: #7cb305" dashed/>
        <a-col :span="8">
          <div>
            <div>
              gooooooooood
            </div>

          </div>
        </a-col>
        <a-divider type="vertical" style="height: 60px; border-color: #7cb305" dashed/>
        <a-col :span="7">
          <div>
            gooooooooood
          </div>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4">
      <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <a-calendar v-model:value="dateValue" :fullscreen="false" @panelChange="onPanelChange" @select="DateOnChange"/>
      </div>
      <div>
        <a-cascader
            size="large"
            v-model:value="shiftValue"
            :options="options"
            expand-trigger="hover"
            placeholder="选择你的班别/shift selection"
            @change="ShiftOnChange"
        />
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>

</style>