const { check } = require('express-validator/check');

module.exports = [
  check('username')
    .isEmail()
    .withMessage('Invalid email')
    .trim()
    .normalizeEmail()
    .custom(value => {
      // check for existing record
      return value;
    })
];
