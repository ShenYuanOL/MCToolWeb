import { createRouter, createWebHistory } from 'vue-router'
import Door from '../views/Door.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Door',
      component: Door
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
