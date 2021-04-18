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
          path: '',
          component: () => import('../views/docs/Start.vue')
        },
        {
          path: 'switch',
          component: () => import('../views/docs/SwitchDemo.vue')
        },
        {
          path: 'button',
          component: () => import('../views/docs/ButtonDemo.vue')
        },
        {
          path: 'dialog',
          component: () => import('../views/docs/DialogDemo.vue')
        },
        {
          path: 'tabs',
          component: () => import('../views/docs/TabsDemo.vue')
        }
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('路由切换了')
})

export default router