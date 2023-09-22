import { createRouter, createWebHistory } from 'vue-router';
import { staticRoutes, notFoundAndNoPower } from './map';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const router = createRouter({
  history: createWebHistory(),
  /**
   * 说明：
   * 1、notFoundAndNoPower 默认添加 404、401 界面，防止一直提示 No match found for location with path 'xxx'
   * 2、controller.js(后端控制路由/前端控制路由) 中也需要加 notFoundAndNoPower 404、401 界面。
   *    防止 404、401 不在 layout 布局中，不设置的话，404、401 界面将全屏显示
   */
  routes: [...notFoundAndNoPower, ...staticRoutes],
});

router.beforeEach(async (to, from, next) => {
  NProgress.configure({ showSpinner: false });
  if (to.name) NProgress.start();
  next();
  NProgress.done();
});

// 路由加载后
router.afterEach(() => {
  NProgress.done();
});

export default router;
