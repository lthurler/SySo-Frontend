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
    },
    {
      path: '/consulta-transportadoras',
      name: 'ConsultaTransportadoras',
      component: () => import('../views/ConsultaTransportadoras.vue')
    },
    {
      path: '/consulta-nota',
      name: 'ConsultaNfe',
      component: () => import('../views/ConsultaNfe.vue')
    },
    {
      path: '/entrada-nota',
      name: 'EntradaNFe',
      component: () => import('../views/EntradaNFe.vue')
    },
    {
      path: '/pedidos-despacho',
      name: 'PedidosDespacho',
      component: () => import('../views/PedidosDespacho.vue')
    }
  ]
})

export default router
