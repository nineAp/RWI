import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Dishes from '../views/Dishes.vue'
import CategoryEditDeatils from '../views/CategoryEditDeatils.vue'
import DishEditDetails from '../views/DishEditDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/categories/edit/:id',
      name: 'catedit',
      component: CategoryEditDeatils
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: Dishes,
    },
    {
      path: '/dishes/edit/:id',
      name: 'dishedit',
      component: DishEditDetails,
    },
  ]
})

export default router
