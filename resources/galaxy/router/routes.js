import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'
import PageLayout from '@/layouts/PageLayout'

export const routes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/auth/Login')
  },
  {
    path: '/register',
    name: 'register',
    hidden: true,
    component: () => import('@/views/auth/Register')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/errorPage/404')
  }
]

export const asyncRouterMap = [
  {
    path: '/',
    component: BasicLayout,
    meta: {
      title: '仪表盘',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/',
        component: BlankLayout,
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
        },
        children: [
          {
            path: '',
            name: 'dashboard',
            component: () => import('@/views/dashboard'),
            meta: {
              title: 'Dashboard'
            }
          }
        ]
      },
      {
        path: 'post',
        component: PageLayout,
        meta: {
          title: '文章',
          icon: 'edit'
        },
        children: [
          {
            path: '',
            name: 'post.index',
            component: () => import('@/views/posts/Index'),
            meta: {
              title: '文章列表'
            }
          },
          {
            path: 'create',
            name: 'post.create',
            component: () => import('@/views/posts/Create'),
            meta: {
              title: '创建文章'
            }
          },
          {
            path: 'edit',
            name: 'post.edit',
            component: () => import('@/views/posts/Update'),
            meta: {
              title: '编辑文章'
            }
          },
          {
            path: 'detail',
            name: 'post.detail',
            component: () => import('@/views/posts/Detail'),
            meta: {
              title: '文章详情'
            }
          }
        ]
      },
      {
        path: 'user',
        component: BlankLayout,
        meta: {
          title: '用户',
          icon: 'user'
        },
        children: [
          {
            path: '',
            name: 'user.index',
            component: () => import('@/views/users/Index'),
            meta: {
              title: '用户列表'
            }
          },
          {
            path: 'create',
            name: 'user.create',
            component: () => import('@/views/users/Create'),
            meta: {
              title: '创建用户'
            }
          },
          {
            path: 'edit',
            name: 'user.edit',
            component: () => import('@/views/users/Update'),
            meta: {
              title: '编辑用户'
            }
          },
          {
            path: 'detail',
            name: 'user.detail',
            component: () => import('@/views/users/Detail'),
            meta: {
              title: '用户详情'
            }
          },
          {
            path: 'profile',
            name: 'user.profile',
            component: () => import('@/views/users/Profile'),
            meta: {
              title: '个人资料'
            }
          }
        ]
      },
      {
        path: 'role',
        component: BlankLayout,
        meta: {
          title: '角色',
          icon: 'team'
        },
        children: [
          {
            path: '',
            name: 'role.index',
            component: () => import('@/views/roles/Index'),
            meta: {
              title: '角色列表'
            }
          },
          {
            path: 'create',
            name: 'role.create',
            component: () => import('@/views/roles/Create'),
            meta: {
              title: '创建角色'
            }
          },
          {
            path: 'edit',
            name: 'role.edit',
            component: () => import('@/views/roles/Update'),
            meta: {
              title: '编辑角色'
            }
          },
          {
            path: 'detail',
            name: 'role.detail',
            component: () => import('@/views/roles/Detail'),
            meta: {
              title: '角色详情'
            }
          }
        ]
      },
      {
        path: 'setting',
        component: BlankLayout,
        meta: {
          title: '设置',
          icon: 'setting'
        },
        children: [
          {
            path: '',
            name: 'setting.index',
            component: () => import('@/views/settings/Index'),
            meta: {
              title: '设置列表'
            }
          },
          {
            path: 'create',
            name: 'setting.create',
            component: () => import('@/views/settings/Create'),
            meta: {
              title: '创建设置'
            }
          },
          {
            path: 'edit',
            name: 'setting.edit',
            component: () => import('@/views/settings/Update'),
            meta: {
              title: '编辑设置'
            }
          },
          {
            path: 'detail',
            name: 'setting.detail',
            component: () => import('@/views/settings/Detail'),
            meta: {
              title: '设置详情'
            }
          }
        ]
      },
      {
        path: 'tag',
        component: BlankLayout,
        meta: {
          title: '标签',
          icon: 'tags'
        },
        children: [
          {
            path: '',
            name: 'tag.index',
            component: () => import('@/views/tags/Index'),
            meta: {
              title: '标签列表'
            }
          },
          {
            path: 'create',
            name: 'tag.create',
            component: () => import('@/views/tags/Create'),
            meta: {
              title: '新建标签'
            }
          },
          {
            path: 'edit',
            name: 'tag.edit',
            component: () => import('@/views/tags/Update'),
            meta: {
              title: '编辑标签'
            }
          },
          {
            path: 'detail',
            name: 'tag.detail',
            component: () => import('@/views/tags/Detail'),
            meta: {
              title: '标签详情'
            }
          }
        ]
      },

      {
        path: 'permission',
        component: BlankLayout,
        meta: {
          title: '权限',
          icon: 'lock'
        },
        children: [
          {
            path: '',
            name: 'permission.index',
            component: () => import('@/views/permissions/Index'),
            meta: {
              title: '权限列表'
            }
          },
          {
            path: 'create',
            name: 'permission.create',
            component: () => import('@/views/permissions/Create'),
            meta: {
              title: '新建权限'
            }
          },
          {
            path: 'edit',
            name: 'permission.edit',
            component: () => import('@/views/permissions/Update'),
            meta: {
              title: '编辑权限'
            }
          },
          {
            path: 'detail',
            name: 'permission.detail',
            component: () => import('@/views/permissions/Detail'),
            meta: {
              title: '权限详情'
            }
          }
        ]
      },
      {
        path: '*', redirect: '/404', hidden: true
      }
    ]
  }
]

export default routes