// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
//import AboutView from '@/views/AboutView.vue';
//import ProductsView from '@/views/ProductsView.vue';
//import CategoriesView from '@/views/CategoriesView.vue';
import FooterView from '@/views/FooterView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/footeer',
    name: 'Footer',
    component: FooterView,
  },
  // {
  //   path: '/products',
  //   name: 'Products',
  //   component: ProductsView,
  // },
  // {
  //   path: '/categories',
  //   name: 'Categories',
  //   component: CategoriesView,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;