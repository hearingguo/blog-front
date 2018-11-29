/**
 * 路由组件出口文件
 */

import AllPages from '../pages';

export default [
  {
    path: '/member',
    exact: true,
    main: AllPages.Learning,
    routes: [
      {
        path: '/learning',
        sidebar: '学习中心',
        main: AllPages.Learning
      },
      {
        path: '/booking',
        sidebar: '预订课程',
        main: AllPages.Booking
      }
    ]
  }
];
