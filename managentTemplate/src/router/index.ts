import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

Vue.use(Router)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]
export const asyncRoutes: RouteConfig[] = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/role',
  //   meta: {
  //     title: '权限测试页',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'], // you can set roles in root nav
  //     alwaysShow: true // will always show the root menu
  //   },
  //   children: [
  //     {
  //       path: 'role',
  //       component: () => import(/* webpackChunkName: "permission-role" */ '@/views/permission/role.vue'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: '角色权限',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  {
    path: '/cancelVerifyReport',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "CancelVfReport" */ '@/views/cancelVerifyReport/index.vue'),
        name: 'CancelVfReport',
        meta: {
          title: '核销报表',
          icon: 'icon',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/memberShip',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "MemberShipList" */ '@/views/memberShip/index.vue'),
        name: 'MemberShipList',
        meta: {
          title: '注册会员报表',
          icon: 'component',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/channelSheet',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "MemberShipList" */ '@/views/channelSheet/index.vue'),
        name: 'ChannelSheet',
        meta: {
          title: '渠道报表',
          icon: 'chart',
          noCache: true
        }
      }
    ]
  }
]
const createRouter = () => new Router({
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
