/**
 * 路由组件出口文件
 */

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Coding = lazy(() => import('../pages/Coding'));
const Traveling = lazy(() => import('../pages/Traveling'));
const Trying = lazy(() => import('../pages/Trying'));

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
        component: Coding
      },
      {
        path: '/traveling',
        title: 'Traveling',
        sidebar: 'nav.traveling',
        component: Traveling
      },
      {
        path: '/trying',
        title: 'Trying',
        sidebar: 'nav.trying',
        component: Trying
      }
    ]
  }
];
