import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/lista',
      name: 'ListaProdutos',
      component: () => import('../views/ListaProdutos.vue')
    }
  ]
})

export default router
