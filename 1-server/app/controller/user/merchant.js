'use strict';

const Controller = require('../../core/base_controller');
const fs = require('mz/fs');
const path = require('path');
// const sendToWormhole = require('stream-wormhole');
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

  /**
   * 上传文件
   */
  async uploadFile() {
    console.log('upload file ----- ');
    const { ctx } = this;

    const stream = await ctx.getFileStream();
    const target = path.join(this.config.baseDir, `app/public/files/${stream.filename}`);
    const remoteFileStream = fs.createWriteStream(target);
    stream.pipe(remoteFileStream);
    console.log('stream', stream);
    const result = `http://127.0.0.1:7001/public/upload/${stream.filename}`;
    this.success(result);
  }
}

module.exports = MerchantCon;
