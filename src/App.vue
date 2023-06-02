<script setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  MailOutlined,
  ShopOutlined
} from '@ant-design/icons-vue';

const router = useRouter();
const itemClick = ({item, key, keyPath}) => {
  console.log(key);
  router.push({path: key})
}
</script>
<template>
  <a-layout>
    <a-layout-sider
        collapsible
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
    >
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" @click="itemClick">

        <a-menu-item key="/announcement">
          <appstore-outlined/>
          <span class="nav-text">announcement</span>
        </a-menu-item>

        <a-sub-menu key="sub2">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>line#2</template>
          <a-menu-item key="/mondayReport2">
            <user-outlined/>
            <span class="nav-text">Monday report</span>
          </a-menu-item>
          <a-menu-item key="/weeklyReport2">
            <video-camera-outlined/>
            <span class="nav-text">weekly report</span>
          </a-menu-item>
          <a-menu-item key="/monthlyReport2">
            <upload-outlined/>
            <span class="nav-text">monthly report</span>
          </a-menu-item>
          <a-menu-item key="/selectedReport2">
            <bar-chart-outlined/>
            <span class="nav-text">selected report</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>line#1</template>
          <a-menu-item key="/mondayReport1">
            <user-outlined/>
            <span class="nav-text">MOnday report</span>
          </a-menu-item>
          <a-menu-item key="/weeklyReport1">
            <video-camera-outlined/>
            <span class="nav-text">weekly report</span>
          </a-menu-item>
          <a-menu-item key="/monthlyReport1">
            <upload-outlined/>
            <span class="nav-text">monthly report</span>
          </a-menu-item>
          <a-menu-item key="/selectedReport1">
            <bar-chart-outlined/>
            <span class="nav-text">selected report</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        header
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>


</template>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>