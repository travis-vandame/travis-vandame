import { createRouter, createWebHashHistory } from 'vue-router'

// TODO: Due to how github pages hosting is you need todo some hacking to get
// createWebHistory to work. Like adding a custom 404 html page that does some
// redirecting for the vue-router to work correctly. I'm opting to take the hit
// and use has routing for now just to get things up and running will revisit and
// document the solution.
// history: createWebHistory(import.meta.env.BASE_URL),

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/commit',
      name: 'Commit',
      component: () => import('../views/CommitView.vue')
    }
  ]
})

export default router
