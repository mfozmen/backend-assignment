const HttpStatus = require('http-status-codes');
const { validationResult } = require('express-validator');

module.exports = {
  validate: function (validations) {
    return async (req, res, next) => {
      await Promise.all(validations.map(validation => validation.run(req)));

      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }

      res.status(HttpStatus.BAD_REQUEST).send({
        code: HttpStatus.BAD_REQUEST,
        msg: errors.array()
      });
    };
  }
};
