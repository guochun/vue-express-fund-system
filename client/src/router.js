import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import MainHome from './views/MainHome.vue';
import InfoShow from './views/InfoShow.vue';
import FundList from './views/FundList.vue';


import Register from './views/Register.vue';
import Login from './views/Login.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: 'index',
  },
  {
    path: '/index',
    component: Home,
    children: [
      {
        path: '/',
        component: MainHome,
      },
      {
        path: '/home',
        name: 'mainHome',
        component: MainHome,
      },
      {
        path: '/info',
        name: 'infoShow',
        component: InfoShow,
      },
      {
        path: '/fund',
        name: 'fundList',
        component: FundList,
      },
    ],
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
