import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | Shopping Cart'
    }
  },
  {
    path: '/admin/category/add',
    name: 'Add Category',
    component: () => import('@/views/AddCategory.vue'),
    meta: {
      title: 'Add Category | Shopping Cart'
    }
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: () => import('@/views/Category.vue'),
    meta: {
      title: 'Category | Shopping Cart'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
