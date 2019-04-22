/**
 * 路由组件出口文件
 */

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const About = lazy(() => import('../pages/About'));

export default [
  {
    path: '/blog',
    exact: true,
    title: 'Home',
    component: Home,
    routes: [
      {
        path: '/sitemap',
        title: '归档',
        name: 'sitemap',
        component: Sitemap
      },
      {
        path: '/about',
        title: '关于我',
        name: 'about',
        component: About
      }
    ]
  }
];
