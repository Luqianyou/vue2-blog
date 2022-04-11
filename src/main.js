import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'
import 'animate.css'
import '@/styles/main.sass'
import '@/styles/icon/iconfont.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.dayjs = dayjs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
