/**
 * 路由组件出口文件
 */

export default {
  menus: [
    // 菜单相关路由
    {
      key: '/',
      title: '会员中心',
      icon: ''
    },
    {
      key: '/booking',
      title: '预订课程',
      icon: '',
      subs: [
        { key: '/booking/english', title: '英语', component: 'bookingEnglish' },
        { key: '/booking/math', title: '数学', component: 'bookingMath' }
      ]
    }
  ],
  others: [] // 非菜单相关路由
};
