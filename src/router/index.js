import { createRouter, createWebHistory } from 'vue-router'
import DailyReport2 from '/src/view/DailyReport2.vue'
import MonthlyReport2 from '/src/view/MonthlyReport2.vue'
import SelectedReport2 from '/src/view/SelectedReport2.vue'
import WeeklyReport2 from '/src/view/WeeklyReport2.vue'
import DailyReport1 from '/src/view/DailyReport1.vue'
import MonthlyReport1 from '/src/view/MonthlyReport1.vue'
import SelectedReport1 from '/src/view/SelectedReport1.vue'
import WeeklyReport1 from '/src/view/WeeklyReport1.vue'


const myRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dailyReport2',
      name: 'DailyReport2',
      component: DailyReport2
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
      path: '/dailyReport1',
      name: 'DailyReport1',
      component: DailyReport1
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
  ]
})

export default myRouter

