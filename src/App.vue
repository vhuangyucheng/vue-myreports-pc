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
          <template #title>Line#2</template>
          <a-menu-item key="/DailyReportDemo02">
            <user-outlined/>
            <span class="nav-text">real-time dashboard</span>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub02">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Line#1</template>
          <a-menu-item key="/Line1Daily">
            <user-outlined/>
            <span class="nav-text">Line1Daily</span>
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