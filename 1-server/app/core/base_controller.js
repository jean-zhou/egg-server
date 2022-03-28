'use strict';
const { Controller } = require('egg');

class BaseController extends Controller {

  success(data) {
    const { ctx } = this;
    ctx.body = {
      success: true,
      data,
    };
  }
}

module.exports = BaseController;
