'use strict';

module.exports = app => {
  app.validator.addRule('merchantPassword', (rule, value) => {
    if (value.length !== 6) {
      return 'must be 6 number!';
    }
  });
};
