/**
 * 路由组件出口文件
 */

import { lazy } from 'react';

const Home = import('../pages/Home');
const Coding = import('../pages/Coding');
const Traveling = import('../pages/Traveling');
const Trying = import('../pages/Trying');

export default [
  {
    path: '/blog',
    exact: true,
    title: 'Home',
    main: Home,
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
