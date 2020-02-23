import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Rutas from '../components/Rutas'
import Map from '../components/Map'


Vue.use(Router)
export default new Router({
  routes: [
  {
  path: '/',
  redirect: '/Home'
  },
  {
  path: '/Home',
  component: Home
  },
  {
  path: '/Rutas',
  component: Rutas
  },
  {
  path: '/map',
  component: Map
  },
  {
  path: '*',
  redirect: '/'
  }
  ]
  })
