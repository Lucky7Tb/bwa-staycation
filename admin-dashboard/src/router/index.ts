import AppTemplate from '../templates/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppTemplate,
      children: [
        {
          path: '/',
          component: () => import('../views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
