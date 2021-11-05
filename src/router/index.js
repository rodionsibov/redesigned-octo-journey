import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/category/add',
    name: 'Add Category',
    component: () => import('@/views/AddCategory.vue')
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: () => import('@/views/Category.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
