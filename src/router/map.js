export const notFoundAndNoPower = [];

export const staticRoutes = [
  {
    path: '/authredirect',
    name: 'staticRoutes.authredirect',
    component: () => import('/@/views/login/component/authredirect.vue'),
    meta: {
      isAuth: false,
    },
  },
];

const staticRoutesFn = () => {
  if (import.meta.env.VITE_NODE_ENV === 'development') {
    staticRoutes.unshift({
      path: '/login',
      name: 'staticRoutes.login',
      component: () => import('/@/views/login/index.vue'),
      meta: {
        isAuth: false,
      },
    });
  }
};
staticRoutesFn();

/**
 *  基础性路由
 *
 * 所有节点都是挂载此节点下
 */
export const baseRoutes = [
  {
    path: '/',
    name: '/',
    component: () => import('/@/layout/index.vue'),
    redirect: '/home',
    meta: {
      isKeepAlive: true,
    },
    children: [],
  },
];
