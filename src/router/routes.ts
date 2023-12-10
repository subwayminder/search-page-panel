import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('src/pages/SearchPage.vue'),
    meta: { nonAuthRequired: true }
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('src/pages/NotFoundPage.vue')
  }
]

export default routes
