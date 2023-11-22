import { createRouter, createWebHistory } from 'vue-router'
import DailyReportDemo02 from "../view/DailyReportDemo2/DailyReportDemo02.vue";
import Line1Daily from "../view/line1Daily/Line1Daily.vue";
import DailyReport from "../view/dailyReport/DailyReport.vue";
import MonthlyReport from "../view/outputReport/monthlyReport/MonthlyReport.vue";
import WeeklyReport from "../view/outputReport/weeklyReport/WeeklyReport.vue";
import DailyInput2 from "../view/dailyInput/dailyInput2/dailyInput2.vue";
import DefectInput from "../view/dailyInput/DefectInput/DefectInput.vue";
import IPQCReview from "../view/dailyInput/IPQCReview/IPQCReview.vue";
import DailyReportDataTable from "../view/daliyReportDataTable/DailyReportDataTable.vue";
import DataCatch from "../view/dataCatch/DataCatch.vue";
import Calendar from "../view/calendar/Calendar.vue";
import ELCounter from "../view/tool/ELCounter/ELCounter.vue";
import ELCounterV2 from "../view/tool/ELCounterV2/ELCounterV2.vue";
import GetMO from "../view/material/getMO/GetMO.vue";
import ListMO from "../view/material/ListMO/ListMO.vue";
import Inventory from "../view/inventory/inventory/Inventory.vue";


const myRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/DailyReportDemo02',
      name: 'DailyReportDemo02',
      component: DailyReportDemo02
    },
    {
      path: '/Line1Daily',
      name: 'Line1Daily',
      component: Line1Daily
    },
    {
      path: '/DailyReport',
      name: 'DailyReport',
      component: DailyReport
    },
    {
      path: '/MonthlyReport',
      name: 'MonthlyReport',
      component: MonthlyReport
    },
    {
      path: '/WeeklyReport',
      name: 'WeeklyReport',
      component: WeeklyReport
    },
    {
      path: '/DailyInput2',
      name: 'DailyInput2',
      component: DailyInput2
    },
    {
      path: '/DefectInput',
      name: 'DefectInput',
      component: DefectInput
    },
    {
      path: '/IPQCReview',
      name: 'IPQCReview',
      component: IPQCReview
    },
    {
      path: '/DailyReportDataTable',
      name: 'DailyReportDataTable',
      component: DailyReportDataTable
    },
    {
      path: '/DataCatch',
      name: 'DataCatch',
      component: DataCatch
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/ELCounter',
      name: 'ELCounter',
      component: ELCounter,
    },
    {
      path: '/ELCounterV2',
      name: 'ELCounterV2',
      component: ELCounterV2,
    },
    {
      path: '/GetMO',
      component: GetMO,
    },
    {
      path: '/ListMO',
      component: ListMO,
    },
    {
      path: '/Inventory',
      component: Inventory,
    },
  ]
})

export default myRouter

