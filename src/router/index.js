import { createRouter, createWebHistory } from 'vue-router'
import MondayReport2 from '/src/view/mondayReport2/MondayReport2.vue'
import MonthlyReport2 from '/src/view/MonthlyReport2.vue'
import SelectedReport2 from '/src/view/SelectedReport2.vue'
import WeeklyReport2 from '/src/view/WeeklyReport2.vue'
import MondayReport1 from '/src/view/MondayReport1.vue'
import MonthlyReport1 from '/src/view/MonthlyReport1.vue'
import SelectedReport1 from '/src/view/SelectedReport1.vue'
import WeeklyReport1 from '/src/view/WeeklyReport1.vue'


const myRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mondayReport2',
      name: 'mondayReport2',
      component: MondayReport2
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
  ]
})

export default myRouter

