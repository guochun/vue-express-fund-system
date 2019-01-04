import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
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
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
];


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.eleToken;
  if (to.path === '/login' || to.path === '/register' || isLogin) {
    next();
  } else {
    next('/login');
  }
});

export default router;
