import { createRouter, createWebHistory } from 'vue-router'
import DailyReportDemo02 from "../view/DailyReportDemo2/DailyReportDemo02.vue";
import Line1Daily from "../view/line1Daily/Line1Daily.vue";
import DailyInput from "../view/dailyInput/DailyInput.vue";
import DailyReport from "../view/dailyReport/DailyReport.vue";
import MonthlyReport from "../view/monthlyReport/MonthlyReport.vue";
import WeeklyReport from "../view/weeklyReport/WeeklyReport.vue";

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
      path: '/DailyInput',
      name: 'DailyInput',
      component: DailyInput
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

  ]
})

export default myRouter

