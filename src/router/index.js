import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    // 首页
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    // 404页面
    path: '/not-found',
    name: 'notFound',
    component: () => import('@/views/NotFound/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/not-found',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;