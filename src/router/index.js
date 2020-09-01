import Vue from 'vue'
import VueRouter from 'vue-router'
import TodayView from '@/views/Today.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/today', meta: { type: 'today' }, component: TodayView },
  { path: '/tomorrow', meta: { type: 'tomorrow' }, component: () => import('@/views/Tomorrow.vue') },
  { path: '/week', meta: { type: 'week' }, component: () => import('@/views/Week.vue') },
  { path: '/month', meta: { type: 'month' }, component: () => import('@/views/Month.vue') },
  { path: '/year', meta: { type: 'year' }, component: () => import('@/views/Year.vue') },
  { path: '/', redirect: '/today'},
  { path: '*', redirect: '/today'}
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default router
