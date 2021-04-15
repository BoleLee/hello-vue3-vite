import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/doc',
      component: () => import('../views/Doc.vue')
    }
  ]
})

export default router