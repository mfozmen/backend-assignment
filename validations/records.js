const { body } = require('express-validator');

module.exports = {
  post: {
    '/search': [
      body('startDate').isDate(),
      body('endDate').isDate(),
      body('minCount').isNumeric(),
      body('maxCount').isNumeric()
    ]
  }
};
