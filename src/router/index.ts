import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/home'
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue")
    }, {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    }, {
      path: "/project",
      name: "Project",
      component: () => import("../views/ProjectView.vue"),
    }, {
      path: "/commit",
      name: "Commit",
      component: () => import("../views/CommitView.vue"),
    },
  ],
});

export default router;
