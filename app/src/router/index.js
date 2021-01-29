import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bots from '../views/Bots.vue'
import Comments from '../views/Comments.vue'

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
    name: 'Comments',
    component: Comments
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
