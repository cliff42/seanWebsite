import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import VueRouter from 'vue-router'
import Contact from '../views/Contact.vue'
import Films from '../views/Films.vue'
import Artwork from '../views/Artwork.vue'

Vue.use(VueYoutube)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Artwork
  },
  {
    path: '/artwork',
    name: 'Artwork',
    component: Artwork
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
