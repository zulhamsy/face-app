import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Login from '../views/Login.vue'

const Dashboard = () => import('../views/Dashboard.vue')
const CreateChallenge = () => import('../views/CreateChallenge.vue')

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
    component: Login,
    beforeEnter() {
      if (store.state.isLogin) {
        return { name: 'dashboard' }
      }
    }
  },
  {
    path: '/create',
    name: 'create',
    component: CreateChallenge,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'text-gray-700 font-semibold'
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
