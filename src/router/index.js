import { createRouter, createWebHistory } from 'vue-router'
import ImpressionView from '@/views/ImpressionView.vue'

const routes = [
  {
    path: '/',
    name: 'ImpressionView',
    component: ImpressionView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
