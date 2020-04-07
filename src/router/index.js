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
    path: '/c3',
    name: 'C3',
    component: () => import(/* webpackChunkName: "c3" */ '../views/C3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
