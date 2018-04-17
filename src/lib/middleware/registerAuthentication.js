import { check } from 'express-validator/check';

export default [
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
