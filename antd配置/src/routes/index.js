import {
    DashBoard,
    Login,
    NotFound,
    Setting,
    Ariticle
} from '../views'

export const mainRouter = [{
    pathname: '/login',
    component: Login
},
{
    pathname: '/404',
    component: NotFound
},
]

export const adminRoutes = [{
    pathname: '/admin/dashboard',
    component: DashBoard,
    title: '仪表盘',
    isNav: true,
    icon:'pie-chart'
},
{
    pathname: '/admin/ariticle',
    component: Ariticle,
    exact: true,
    title: '文章管理',
    isNav: true,
    icon:'book'
},
{
    pathname: '/admin/setting',
    component: Setting,
    title: '设置',
    isNav: true,
    icon:'setting'
},
]