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
  <a-layout style="min-height: 100vh">

    <a-layout-sider collapsible>
      <div class="logo">
        <div>Solar4America</div>
      </div>

      <a-menu theme="dark" mode="inline" @click="itemClick">

        <a-menu-item key="/announcement">
          <appstore-outlined/>
          <span class="nav-text">announcement</span>
        </a-menu-item>

        <a-sub-menu key="sub01">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Example</template>
          <a-menu-item key="/DailyReportDemo1">
            <user-outlined/>
            <span class="nav-text">Demo01</span>
          </a-menu-item>
          <a-menu-item key="/DailyReportDemo02">
            <user-outlined/>
            <span class="nav-text">Demo02</span>
          </a-menu-item>
          <a-menu-item key="/webSocketDemo">
            <user-outlined/>
            <span class="nav-text">webSocketDemo</span>
          </a-menu-item>
          <a-menu-item key="/stringerDemo01">
            <user-outlined/>
            <span class="nav-text">stringerDemo01</span>
          </a-menu-item>

        </a-sub-menu>


        <a-sub-menu key="sub2">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>line#2</template>
          <a-menu-item key="/mondayReport2">
            <user-outlined/>
            <span class="nav-text">Monday report</span>
          </a-menu-item>
          <a-menu-item key="/mondayReport2">
            <user-outlined/>
            <span class="nav-text">Tuesday report</span>
          </a-menu-item>
          <a-menu-item key="/wednesdayReport2">
            <user-outlined/>
            <span class="nav-text">Wednesday report</span>
          </a-menu-item>
          <a-menu-item key="/thursdayReport02">
            <user-outlined/>
            <span class="nav-text">Thursday report</span>
          </a-menu-item>
          <a-menu-item key="/fridayReport02">
            <user-outlined/>
            <span class="nav-text">Friday report</span>
          </a-menu-item>
          <a-menu-item key="/mondayReport2">
            <user-outlined/>
            <span class="nav-text">Saturday report</span>
          </a-menu-item>
          <a-menu-item key="/mondayReport2">
            <user-outlined/>
            <span class="nav-text">Sunday report</span>
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
<!--      <a-layout-header style="background: #fff; padding: 0">-->
<!--        header-->
<!--      </a-layout-header>-->
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        KPI dashboard 2.0.0 powered by IT department, email: helpdesk@solarjuiceamerica.com
      </a-layout-footer>
    </a-layout>
  </a-layout>


</template>

<style>
.logo {
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