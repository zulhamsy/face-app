import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'

import Login from '../views/Login.vue'
const Dashboard = () => import('../views/Dashboard.vue')
const CreateChallenge = () => import('../views/CreateChallenge.vue')
const ViewChallenge = () => import('../views/ViewChallenge.vue')

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
      if (auth.currentUser != null) {
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
  },
  {
    path: '/view-challenge/:id',
    name: 'view',
    component: ViewChallenge,
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
  if (to.meta.requiresAuth && !auth.currentUser) {
    next({ name: 'login' })
  } else if (to.meta.requiresAuth && auth.currentUser) {
    next()
  } else {
    next()
  }
})

export default router
