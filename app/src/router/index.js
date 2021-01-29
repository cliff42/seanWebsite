import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Films.vue'
import Bots from '../views/Bots.vue'

Vue.use(VueYoutube)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artwork',
    name: 'Bots',
    component: Bots
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/contact',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
