import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/struction',
    component: () => import('../views/StructionView.vue')
  },
  {
    path: '/monitor',
    component: () => import('../views/MonitorView.vue')
  },
  {
    path: '/monitorData',
    component: () => import('../views/MonitorDataView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
