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
import DefectInput from "./view/dailyInput/defectInput/DefectInput.vue";
import WoReport from "./view/woReport/WoReport.vue";

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

        <a-menu-item key="/Calendar">
          <appstore-outlined/>
          <span class="nav-text">Calendar</span>
        </a-menu-item>

        <a-sub-menu key="sub05">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Tool</template>
          <a-menu-item key="/ELCounter">
            <user-outlined/>
            <span class="nav-text">ELCounter</span>
          </a-menu-item>
          <a-menu-item key="/ELCounterV2">
            <user-outlined/>
            <span class="nav-text">ELCounterV2</span>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub01">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Line#2</template>
<!--          <a-menu-item key="/DailyReportDemo02">-->
<!--            <user-outlined/>-->
<!--            <span class="nav-text">real-time dashboard</span>-->
<!--          </a-menu-item>-->
          <a-menu-item key="/dashboard">
            <user-outlined/>
            <span class="nav-text">dashboard2</span>
          </a-menu-item>
          <a-menu-item key="/ELDashboard">
            <user-outlined/>
            <span class="nav-text">EL1-Dashboard</span>
          </a-menu-item>
          <a-menu-item key="/StringerDashboard">
            <user-outlined/>
            <span class="nav-text">StringerDashboard</span>
          </a-menu-item>
          <a-menu-item key="/FramingDashboard">
            <user-outlined/>
            <span class="nav-text">FramingDashboard</span>
          </a-menu-item>
          <a-menu-item key="/HourlyDashboard">
            <user-outlined/>
            <span class="nav-text">HourlyDashboard</span>
          </a-menu-item>
        </a-sub-menu>

        <!--        <a-sub-menu key="sub02">-->
        <!--          <template #icon>-->
        <!--            <MailOutlined/>-->
        <!--          </template>-->
        <!--          <template #title>Line#1</template>-->
        <!--          <a-menu-item key="/Line1Daily">-->
        <!--            <user-outlined/>-->
        <!--            <span class="nav-text">Line1Daily</span>-->
        <!--          </a-menu-item>-->
        <!--        </a-sub-menu>-->

        <a-sub-menu key="sub03">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>DailyInput</template>

          <a-menu-item key="/DailyInput2">
            <user-outlined/>
            <span class="nav-text">DailyInput2.0.0</span>
          </a-menu-item>
<!--          <a-menu-item key="/DefectInput">-->
<!--            <user-outlined/>-->
<!--            <span class="nav-text">DefectInput</span>-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="/IPQCReview">-->
<!--            <user-outlined/>-->
<!--            <span class="nav-text">IPQCReview</span>-->
<!--          </a-menu-item>-->
        </a-sub-menu>

        <a-sub-menu key="sub04">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Report</template>

<!--          <a-menu-item key="/DailyReport">-->
<!--            <user-outlined/>-->
<!--            <span class="nav-text">DailyReport</span>-->
<!--          </a-menu-item>-->
          <a-menu-item key="/DailyReportDataTable">
            <user-outlined/>
            <span class="nav-text">DailyReport</span>
          </a-menu-item>
          <a-menu-item key="/woReport">
            <user-outlined/>
            <span class="nav-text">WO-Report</span>
          </a-menu-item>
          <a-menu-item key="/WeeklyReport">
            <user-outlined/>
            <span class="nav-text">WeeklyReport</span>
          </a-menu-item>
          <a-menu-item key="/MonthlyReport">
            <user-outlined/>
            <span class="nav-text">MonthlyReport</span>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="MaterialManagement">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>MaterialManagement</template>

          <a-menu-item key="/GetMO">
            <user-outlined/>
            <span class="nav-text">GetMO</span>
          </a-menu-item>
          <a-menu-item key="/ListMO">
            <user-outlined/>
            <span class="nav-text">ListMO</span>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="Inventory">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Inventory</template>
          <a-menu-item key="/Inventory">
            <user-outlined/>
            <span class="nav-text">Inventory</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="Planning">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Planning</template>
          <a-menu-item key="/schedule">
            <user-outlined/>
            <span class="nav-text">Schedule</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="Test">
          <template #icon>
            <MailOutlined/>
          </template>
          <template #title>Test</template>
          <a-menu-item key="/Test">
            <user-outlined/>
            <span class="nav-text">Test</span>
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
        KPI dashboard 7.0.0, powered by IT department, Updated hourly output chart, published on 10/31/2024, email:
        helpdesk@solarjuiceamerica.com
      </a-layout-footer>
    </a-layout>
  </a-layout>


</template>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>