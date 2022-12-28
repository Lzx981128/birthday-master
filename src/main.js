// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/index'
import VueFullpage from 'vue-fullpage.js'
import './assets/font/iconfont.js' //引入阿里巴巴图标库js
import './assets/font/iconfont.css'//引入阿里巴巴图标库css
Vue.use(VueRouter)
Vue.use(VueFullpage)

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
