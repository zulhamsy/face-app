import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Login from '../views/Login.vue'

const Dashboard = () => import('../views/Dashboard.vue')

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.requiresAuth && store.state.isLogin) {
    next()
  } else {
    next()
  }
})

export default router
