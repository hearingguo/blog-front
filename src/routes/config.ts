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
        sidebar: '学习中心',
        main: AllPages.Home
      },
      {
        path: '/list',
        sidebar: '预订课程',
        main: AllPages.List
      }
    ]
  }
];
