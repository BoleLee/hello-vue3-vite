import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '',
      component: () => import('../views/Frank.vue')
    }
  ]
})

export default router