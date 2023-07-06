import { createRouter, createWebHistory } from 'vue-router'
import MondayReport2 from '/src/view/mondayReport2/MondayReport2.vue'
import WednesdayReport02 from "../view/wednesdayReport02/WednesdayReport02.vue";
import MonthlyReport2 from '/src/view/MonthlyReport2.vue'
import SelectedReport2 from '/src/view/SelectedReport2.vue'
import WeeklyReport2 from '/src/view/weeklyReport2/WeeklyReport2.vue'
import MondayReport1 from '/src/view/MondayReport1.vue'
import MonthlyReport1 from '/src/view/MonthlyReport1.vue'
import SelectedReport1 from '/src/view/SelectedReport1.vue'
import WeeklyReport1 from '/src/view/WeeklyReport1.vue'
import DailyReportDemo1 from "../view/DailyReportDemo1/DailyReportDemo1.vue";
import ThursdayReport02 from "../view/thursdayReport02/ThursdayReport02.vue";
import DailyReportDemo02 from "../view/DailyReportDemo2/DailyReportDemo02.vue";
import FridayReport02 from "../view/FridayReport02/FridayReport02.vue";
import WebSocketDemo from "../view/WebSocketDemo/WebSocketDemo.vue";
import StringerDemo01 from "../view/StringerDemo01/StringerDemo01.vue";


const myRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mondayReport2',
      name: 'mondayReport2',
      component: MondayReport2
    },
    {
      path: '/wednesdayReport2',
      name: 'wednesdayReport2',
      component: WednesdayReport02
    },
    {
      path: '/thursdayReport02',
      name: 'thursdayReport02',
      component: ThursdayReport02
    },
    {
      path: '/fridayReport02',
      name: 'fridayReport02',
      component: FridayReport02
    },
    {
      path: '/monthlyReport2',
      name: 'MonthlyReport2',
      component: MonthlyReport2
    },
    {
      path: '/selectedReport2',
      name: 'SelectedReport2',
      component: SelectedReport2
    },
    {
      path: '/weeklyReport2',
      name: 'WeeklyReport2',
      component: WeeklyReport2
    },
    {
      path: '/mondayReport1',
      name: 'MondayReport1',
      component: MondayReport1
    },
    {
      path: '/monthlyReport1',
      name: 'MonthlyReport1',
      component: MonthlyReport1
    },
    {
      path: '/selectedReport1',
      name: 'SelectedReport1',
      component: SelectedReport1
    },
    {
      path: '/weeklyReport1',
      name: 'WeeklyReport1',
      component: WeeklyReport1
    },
    {
      path: '/DailyReportDemo1',
      name: 'DailyReportDemo1',
      component: DailyReportDemo1
    },
    {
      path: '/DailyReportDemo02',
      name: 'DailyReportDemo02',
      component: DailyReportDemo02
    },
    {
      path: '/webSocketDemo',
      name: 'webSocketDemo',
      component: WebSocketDemo
    },
    {
      path: '/StringerDemo01',
      name: 'StringerDemo01',
      component: StringerDemo01
    },
  ]
})

export default myRouter

