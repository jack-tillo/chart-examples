import Vue from 'vue'
import VueRouter from 'vue-router'
import ApexCharts from '../views/ApexCharts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Apex',
    component: ApexCharts
  },
  {
    path: '/google',
    name: 'Google',
    component: () => import(/* webpackChunkName: "google" */ '../views/Google.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
