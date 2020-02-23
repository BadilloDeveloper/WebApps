import Vue from 'vue'
import Router from 'vue-router'
import Alarms from '../components/Alarms'
import Tasks from '../components/Tasks'
import Search from '../components/Search'


Vue.use(Router)
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
