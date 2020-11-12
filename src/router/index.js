import  { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
const routerHistory = createWebHistory()

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    }
]


const router = createRouter({
    history: routerHistory,
    routes
})
  


export default router