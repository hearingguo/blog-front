/**
 * 路由组件出口文件
 */

import AllPages from '../pages';

export default [
  {
    path: '/blog',
    exact: true,
    main: AllPages.Home,
    routes: [
      {
        path: '/home',
        sidebar: '博客主页',
        main: AllPages.Home
      },
      {
        path: '/coding',
        sidebar: '策码奔腾',
        main: AllPages.Coding
      },
      {
        path: '/traveling',
        sidebar: '目的旅行',
        main: AllPages.Traveling
      },
      {
        path: '/trying',
        sidebar: '不务正业',
        main: AllPages.Trying
      }
    ]
  }
];
