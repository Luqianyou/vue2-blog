import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const NotFond = () => import('../views/NotFond.vue')
const Layout = () => import('../views/Layout.vue')

const routes = [
  {
    path: '*',
    component: NotFond
  },
  {
    path: '/',
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
