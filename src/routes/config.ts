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
        path: '/coding',
        sidebar: 'nav.coding',
        main: AllPages.Coding
      },
      {
        path: '/traveling',
        sidebar: 'nav.traveling',
        main: AllPages.Traveling
      },
      {
        path: '/trying',
        sidebar: 'nav.trying',
        main: AllPages.Trying
      }
    ]
  }
];
