'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('merchant', '/api/merchant', controller.user.merchant);
  // 多个 query 参数
  router.get('/api/merchant/ids', controller.user.merchant.listPosts);
};
