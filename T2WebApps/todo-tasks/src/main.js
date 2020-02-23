// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import Alarms from './components/Alarms'
import Tasks from './components/Tasks'
import Search from './components/Search'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // el tema
export default new Router({
  routes: [
  {
  path: '/',
  redirect: '/alarms'
  },
  {
  path: '/alarms',
  component: Alarms
  },
  {
  path: '/tasks',
  component: Tasks
  },
  {
  path: '/search',
  component: Search
  },
  {
  path: '*',
  redirect: '/'
  }
  ]
})

Vue.config.productionTip = false
Vue.use(VueMaterial) // importamos el plugin
Vue.use(Router)
Window.Vue=Vue;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Router,
  components: { App },
  template: '<App/>'
})

