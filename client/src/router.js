import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home',
    },
  },
  {
    path: '/index',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  }
];


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
