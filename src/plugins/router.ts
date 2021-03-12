import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Chamber from '@/views/Chamber.vue'
import NotFound from '@/views/NotFound.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chamber',
      name: 'chamber',
      component: Chamber,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, _, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const user = (store as any).state.AppStore.user

  if (requiresAuth && !user) {
    next('/')
  } else {
    if (to.path === '/' && user) {
      next({ name: 'chamber', query: to.query })
    } else {
      next()
    }
  }
})

export default router
