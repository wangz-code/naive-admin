export interface UserInfo {
  id: number;
  roles: string[];
  username: string;
  fullName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  homePageUrl: string;
  token: string;
}

export const MOCK_USERS: UserInfo[] = [
  {
    id: 1,
    username: 'admin',
    fullName: 'Kirk Lin',
    email: 'hi@kirklin.cn',
    phone: '15912345678',
    avatarUrl: 'https://cdn-fusion.imgimg.cc/i/2024/5553dc14e1b5ce44.jpg',
    homePageUrl: '/dashboard/index',
    roles: ['admin'],
    token: 'adminFakeToken',
  },
];

export const MOCK_CODES = [
  // super
  {
    codes: ['AC_100100', 'AC_100110', 'AC_100120', 'AC_100010'],
    username: 'vben',
  },
  {
    // admin
    codes: ['AC_100010', 'AC_100020', 'AC_100030'],
    username: 'admin',
  },
  {
    // user
    codes: ['AC_1000001', 'AC_1000002'],
    username: 'jack',
  },
];

const createDemosMenus = () => {
  return [
    {
      title: 'routes.chat.chat',
      icon: {
        name: 'GameControllerSharp',
      },
      orderNumber: -9999,
      shouldHideSubMenuInMenu: true,
      meta: {
        title: 'routes.chat.chat',
        icon: {
          name: 'GameControllerSharp',
        },
        orderNumber: -9999,
        shouldHideSubMenuInMenu: true,
      },
      name: 'routes.chat.chat',
      shouldHideMenu: false,
      path: '/chat/index',
      redirect: '/chat/index',
    },
    {
      title: 'routes.dashboard.dashboard',
      icon: {
        name: 'Dashboard',
      },
      orderNumber: -9000,
      shouldHideSubMenuInMenu: true,
      meta: {
        title: 'routes.dashboard.dashboard',
        icon: {
          name: 'Dashboard',
        },
        orderNumber: -9000,
        shouldHideSubMenuInMenu: true,
      },
      name: 'routes.dashboard.dashboard',
      shouldHideMenu: false,
      path: '/dashboard/index',
      redirect: '/dashboard/index',
    },
    {
      title: 'routes.profile.profile',
      icon: {
        name: 'CircleSquare',
      },
      orderNumber: -9000,
      shouldHideSubMenuInMenu: true,
      shouldHideInMenu: true,
      meta: {
        title: 'routes.profile.profile',
        icon: {
          name: 'CircleSquare',
        },
        orderNumber: -9000,
        shouldHideSubMenuInMenu: true,
        shouldHideInMenu: true,
      },
      name: 'routes.profile.profile',
      shouldHideMenu: true,
      path: '/profile/index',
      redirect: '/profile/index',
    },
    {
      title: 'ErrorPage',
      shouldHideInMenu: true,
      shouldHideBreadcrumb: true,
      meta: {
        title: 'ErrorPage',
        shouldHideInMenu: true,
        shouldHideBreadcrumb: true,
      },
      name: 'PageNotFound',
      shouldHideMenu: true,
      path: '/:path(.*)*',
      children: [
        {
          title: 'ErrorPage',
          shouldHideInMenu: true,
          shouldHideBreadcrumb: true,
          meta: {
            title: 'ErrorPage',
            shouldHideInMenu: true,
            shouldHideBreadcrumb: true,
          },
          name: 'NotFound',
          shouldHideMenu: true,
          path: '',
        },
      ],
    },
    {
      title: 'routes.components.components',
      shouldHideMenu: false,
      path: '/components',
      redirect: '/components/headlessTable/basic',
      children: [
        {
          title: 'routes.components.report',
          path: '/components/report',
          redirect: '/components/report/r01',
          children: [
            {
              title: 'routes.components.report001',
              shouldHideMenu: false,
              shouldHideInMenu: false,
              path: '/components/report/r01',
            },
            {
              title: 'routes.components.report002',
              shouldHideMenu: false,
              shouldHideInMenu: false,
              path: '/components/report/r02',
            },
          ],
        },
        {
          title: 'routes.components.list',
          path: '/components/list',
          redirect: '/components/list/basic',
          children: [
            {
              title: 'routes.components.listBasic',
              shouldHideInMenu: false,
              shouldHideMenu: false,
              path: '/components/list/basic',
              shouldHideSubMenuInMenu: true,
            },
            {
              title: 'routes.components.listCard',
              name: 'routes.components.listCard',
              shouldHideInMenu: false,
              meta: {
                title: 'routes.components.listCard',
                shouldHideInMenu: false,
              },
              shouldHideMenu: false,
              path: '/components/list/card',
            },
          ],
        },

        {
          title: 'routes.components.headlessTable',
          icon: {
            name: 'Table',
          },
          shouldHideInMenu: false,
          meta: {
            title: 'routes.components.headlessTable',
            icon: {
              name: 'Table',
            },
            shouldHideInMenu: false,
          },
          name: 'routes.components.headlessTable',
          shouldHideMenu: false,
          path: '/components/headlessTable',
          redirect: '/components/headlessTable/basic',
          children: [
            {
              title: 'routes.components.headlessTableBasic',
              shouldHideInMenu: false,
              meta: {
                title: 'routes.components.headlessTableBasic',
                shouldHideInMenu: false,
              },
              name: 'routes.components.headlessTableBasic',
              shouldHideMenu: false,
              path: '/components/headlessTable/basic',
            },
            {
              title: 'routes.components.headlessTablePagination',
              shouldHideInMenu: false,
              meta: {
                title: 'routes.components.headlessTablePagination',
                shouldHideInMenu: false,
              },
              name: 'routes.components.headlessTablePagination',
              shouldHideMenu: false,
              path: '/components/headlessTable/pagination',
            },
          ],
        },
        {
          title: 'routes.components.form',
          path: '/components/form',
          redirect: '/components/form/simple',
          children: [
            {
              title: 'routes.components.formsimple',
              shouldHideMenu: false,
              shouldHideInMenu: false,
              path: '/components/form/simple',
            },
            {
              title: 'routes.components.formcomplex',
              shouldHideMenu: false,
              shouldHideInMenu: false,
              path: '/components/form/complex',
            },
          ],
        },
        {
          title: 'routes.components.echarts',
          path: '/components/echarts',
          children: [
            {
              title: 'routes.components.normal',
              shouldHideMenu: false,
              shouldHideInMenu: false,
              path: '/components/echarts/demo',
            },
          ],
        },
        {
          title: 'routes.components.pdf',
          path: '/components/pdf',
          children: [
            {
              title: 'routes.components.normal',
              shouldHideMenu: false,
              shouldHideInMenu: false,
              path: '/components/pdf/demo',
            },
          ],
        },
      ],
    },
    {
      title: 'routes.design.design',
      icon: {
        name: 'EditCircle',
      },
      meta: {
        title: 'routes.design.design',
        icon: {
          name: 'EditCircle',
        },
      },
      name: 'routes.design.design',
      shouldHideMenu: false,
      path: '/design',
      redirect: '/design/palette',
      children: [
        {
          title: 'routes.design.palette',
          icon: {
            name: 'Palette',
          },
          meta: {
            title: 'routes.design.palette',
            icon: {
              name: 'Palette',
            },
          },
          name: 'routes.design.palette',
          shouldHideMenu: false,
          path: '/design/palette',
        },
        {
          title: 'routes.design.typography',
          icon: {
            name: 'Typography',
          },
          meta: {
            title: 'routes.design.typography',
            icon: {
              name: 'Typography',
            },
          },
          name: 'routes.design.typography',
          shouldHideMenu: false,
          path: '/design/typography',
        },
      ],
    },
    {
      title: 'routes.directives.directives',
      icon: {
        name: 'Backhoe',
      },
      meta: {
        title: 'routes.directives.directives',
        icon: {
          name: 'Backhoe',
        },
      },
      name: 'routes.directives.directives',
      shouldHideMenu: false,
      path: '/directive',
      redirect: '/directive/copy',
      children: [
        {
          title: 'routes.directives.ripple',
          icon: {
            name: 'DropCircle',
          },
          meta: {
            title: 'routes.directives.ripple',
            icon: {
              name: 'DropCircle',
            },
          },
          name: 'routes.directives.ripple',
          shouldHideMenu: false,
          path: '/directive/ripple',
        },
        {
          title: 'routes.directives.copy',
          icon: {
            name: 'CopyOutline',
          },
          meta: {
            title: 'routes.directives.copy',
            icon: {
              name: 'CopyOutline',
            },
          },
          name: 'routes.directives.copy',
          shouldHideMenu: false,
          path: '/directive/copy',
        },
      ],
    },
    {
      title: 'routes.iframe.iframe',
      icon: {
        name: 'Link',
      },
      meta: {
        title: 'routes.iframe.iframe',
        icon: {
          name: 'Link',
        },
      },
      name: 'routes.iframe.iframe',
      shouldHideMenu: false,
      path: '/frame',
      redirect: '/frame/github',
      children: [
        {
          title: 'routes.iframe.viteInternal',
          icon: '',
          iframeLink: 'https://cn.vitejs.dev/',
          meta: {
            title: 'routes.iframe.viteInternal',
            icon: '',
            iframeLink: 'https://cn.vitejs.dev/',
          },
          name: 'routes.iframe.viteInternal',
          shouldHideMenu: false,
          path: '/frame/vite',
        },
        {
          title: 'routes.iframe.ViteExternal',
          icon: '',
          externalLink: 'https://vitejs.dev/',
          meta: {
            title: 'routes.iframe.ViteExternal',
            icon: '',
            externalLink: 'https://vitejs.dev/',
          },
          name: 'routes.iframe.ViteExternal',
          shouldHideMenu: false,
          path: '/frame/vite-external',
        },
        {
          title: 'routes.iframe.githubInternal',
          icon: {
            name: 'BrandGithub',
          },
          iframeLink: 'https://github.com/kirklin/celeris-web',
          meta: {
            title: 'routes.iframe.githubInternal',
            icon: {
              name: 'BrandGithub',
            },
            iframeLink: 'https://github.com/kirklin/celeris-web',
          },
          name: 'routes.iframe.githubInternal',
          shouldHideMenu: false,
          path: '/frame/github',
        },
        {
          title: 'routes.iframe.GitHubExternal',
          icon: {
            name: 'BrandGithub',
          },
          externalLink: 'https://github.com/kirklin/celeris-web',
          meta: {
            title: 'routes.iframe.GitHubExternal',
            icon: {
              name: 'BrandGithub',
            },
            externalLink: 'https://github.com/kirklin/celeris-web',
          },
          name: 'routes.iframe.GitHubExternal',
          shouldHideMenu: false,
          path: '/frame/github-external',
        },
      ],
    },
    {
      title: 'routes.permission.permission',
      icon: {
        name: 'LockSquare',
      },
      orderNo: 15,
      meta: {
        title: 'routes.permission.permission',
        icon: {
          name: 'LockSquare',
        },
        orderNo: 15,
      },
      name: 'routes.permission.permission',
      shouldHideMenu: false,
      path: '/permission',
      redirect: '/permission/frontend/page',
      children: [
        {
          title: 'routes.permission.frontend',
          meta: {
            title: 'routes.permission.frontend',
          },
          name: 'routes.permission.frontend',
          shouldHideMenu: false,
          path: '/permission/frontend',
          redirect: '/permission/frontend/page',
          children: [
            {
              title: 'routes.permission.pageAuth',
              meta: {
                title: 'routes.permission.pageAuth',
              },
              name: 'routes.permission.pageAuth',
              shouldHideMenu: false,
              path: '/permission/frontend/page',
            },
            {
              title: 'routes.permission.buttonAuth',
              meta: {
                title: 'routes.permission.buttonAuth',
              },
              name: 'routes.permission.buttonAuth',
              shouldHideMenu: false,
              path: '/permission/frontend/button-permission',
            },
            {
              title: 'routes.permission.authPageA',
              allowedRoles: ['admin'],
              meta: {
                title: 'routes.permission.authPageA',
                allowedRoles: ['admin'],
              },
              name: 'routes.permission.authPageA',
              shouldHideMenu: false,
              path: '/permission/frontend/auth-pageA',
            },
            {
              title: 'routes.permission.authPageB',
              allowedRoles: ['user'],
              meta: {
                title: 'routes.permission.authPageB',
                allowedRoles: ['user'],
              },
              name: 'routes.permission.authPageB',
              shouldHideMenu: false,
              path: '/permission/frontend/auth-pageB',
            },
          ],
        },
        {
          title: 'routes.permission.backend',
          meta: {
            title: 'routes.permission.backend',
          },
          name: 'routes.permission.backend',
          shouldHideMenu: false,
          path: '/permission/back',
          redirect: '/permission/back/page',
          children: [
            {
              title: 'routes.permission.pageAuth',
              meta: {
                title: 'routes.permission.pageAuth',
              },
              name: 'routes.permission.pageAuth',
              shouldHideMenu: false,
              path: '/permission/back/page',
            },
            {
              title: 'routes.permission.buttonAuth',
              meta: {
                title: 'routes.permission.buttonAuth',
              },
              name: 'routes.permission.buttonAuth',
              shouldHideMenu: false,
              path: '/permission/back/button-permission',
            },
          ],
        },
      ],
    },
    {
      title: 'routes.result.result',
      icon: {
        name: 'CheckupList',
      },
      meta: {
        title: 'routes.result.result',
        icon: {
          name: 'CheckupList',
        },
      },
      name: 'routes.result.result',
      shouldHideMenu: false,
      path: '/result',
      redirect: '/result/success',
      children: [
        {
          title: 'routes.result.success',
          icon: {
            name: 'CheckmarkCircleOutline',
          },
          meta: {
            title: 'routes.result.success',
            icon: {
              name: 'CheckmarkCircleOutline',
            },
          },
          name: 'routes.result.success',
          shouldHideMenu: false,
          path: '/result/success',
        },
        {
          title: 'routes.result.fail',
          icon: {
            name: 'CloseCircleOutline',
          },
          meta: {
            title: 'routes.result.fail',
            icon: {
              name: 'CloseCircleOutline',
            },
          },
          name: 'routes.result.fail',
          shouldHideMenu: false,
          path: '/result/fail',
        },
      ],
    },
  ];
};

export const MOCK_MENUS = createDemosMenus();
