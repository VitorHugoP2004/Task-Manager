import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tarefas from '../views/Tarefas.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tarefas',
    name: 'tarefas',
    component: Tarefas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
