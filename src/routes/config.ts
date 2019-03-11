/**
 * 路由组件出口文件
 */

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Articles = lazy(() => import('../pages/Articles'));

export default [
  {
    path: '/blog',
    exact: true,
    title: 'Home',
    component: Home,
    routes: [
      {
        path: '/coding',
        title: 'Coding',
        sidebar: 'nav.coding',
        component: Articles
      },
      {
        path: '/traveling',
        title: 'Traveling',
        sidebar: 'nav.traveling',
        component: Articles
      },
      {
        path: '/trying',
        title: 'Trying',
        sidebar: 'nav.trying',
        component: Articles
      }
    ]
  }
];
