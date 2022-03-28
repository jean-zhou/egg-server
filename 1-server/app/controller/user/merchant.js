'use strict';

const Controller = require('../../core/base_controller');

class MerchantCon extends Controller {
  async index() {
    console.log(' index');
    const data = {
      name: 'kate',
      age: '12',
    };
    this.success(data);
  }

  /**
   * 新增商家
   * 1，获取参数
   * 2，校验参数
   * 3，把参数传给 service 层
   * 4，拿到结果返回 http
   */
  async create() {
    // 1,获取参数
    const { ctx } = this;
    // const data = ctx.request.body;
    // 2， 校验参数
    try {
      const rule = {
        username: {
          type: 'string',
          required: true,
        },
        password: {
          type: 'merchantPassword',
        },
        email: {
          type: 'email',
          allowEmpty: true,
        },
      };
      ctx.validate(rule);
    } catch (e) {
      ctx.body = e.errors;
    }
  }

  /**
   * 多个路由参数 query
   */
  async listPosts() {
    const { ctx } = this;
    const ids = ctx.queries;
    console.log('ids', ids);
    const data = {
      queries: ids,
    };
    this.success(data);
  }
}

module.exports = MerchantCon;
