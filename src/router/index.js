import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    // 首页
    path: "/",
    name: "home",
    component :() => import("@/views/Home/index.vue")
  },
  {
    // 核心业务
    path: "/Business",
    name: "Business",
    component: () => import("@/views/Business/index.vue"),
  },
  {
    // 新闻详情
    path: "/News-Detail",
    name: "NewsDetail",
    component: () => import("@/views/News/Detail/index.vue"),
  },
  {
    // 企业文化
    path: "/Culture",
    name: "Culture",
    component: () => import("@/views/Culture/index.vue"),
  },
  {
    // 关于我们
    path: "/AboutUs",
    name: "AboutUs",
    component: () => import("@/views/AboutUs/index.vue"),
  },
  {
    // 404页面
    path: "/not-found",
    name: "notFound",
    component: () => import("@/views/NotFound/index.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/not-found",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
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
