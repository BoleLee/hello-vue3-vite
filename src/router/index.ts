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
      component: () => import('../views/Doc.vue'),
      children: [
        {
          path: 'switch',
          component: () => import('../views/docs/Switch.vue')
        }
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('路由切换了')
})

export default router