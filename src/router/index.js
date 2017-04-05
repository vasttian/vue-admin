import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login.vue';
import NotFound from '../views/404.vue';
import Home from '../views/Home.vue';
import Table from '../views/nav1/Table.vue';
import Form from '../views/nav1/Form.vue';
import User from '../views/nav1/User.vue';
import Echarts from '../views/charts/Echarts.vue'

Vue.use(Router);

let routes = [
  {
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true,
  },
  {
    path: '/404',
    component: NotFound,
    name: '出错啦',
    hidden: true,
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '导航一',

    // 图标样式class
    iconCls: 'el-icon-message',
    children: [
      // { path: '/main', component: Main, name: '主页', hidden: true },
      { path: 'table', component: Table, name: 'Table' },
      { path: 'form', component: Form, name: 'Form' },
      { path: 'user', component: User, name: '列表' },
    ],
  },
  // {
  //     path: '/',
  //     component: Home,
  //     name: '导航二',
  //     iconCls: 'fa fa-id-card-o',
  //     children: [
  //         { path: '/page4', component: Page4, name: '页面4' },
  //         { path: '/page5', component: Page5, name: '页面5' }
  //     ]
  // },
  // {
  //     path: '/',
  //     component: Home,
  //     name: '',
  //     iconCls: 'fa fa-address-card',
  //     leaf: true,//只有一个节点
  //     children: [
  //         { path: '/page6', component: Page6, name: '导航三' }
  //     ]
  // },
  {
    path: '/',
    component: Home,
    name: 'Charts',
    iconCls: 'fa fa-bar-chart',
    children: [
      { path: 'echarts', component: Echarts, name: 'echarts' }
    ]
  },
  {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
  }
];

export default new Router({
	routes,
});
