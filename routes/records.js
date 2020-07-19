const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
const Record = require('../model/record');
const { checkSchema, validationResult } = require('express-validator');
const validations = require('../validations');
const { validate } = require('../utils/validator');

router.post(
  '/search',
  validate(validations.records.post['/search']),
  async function (req, res) {
    try {
      let records = await Record.searchAsync(req.body);
      res.status(HttpStatus.OK).send({ code: 0, msg: 'Success', records });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({
        code: HttpStatus.BAD_REQUEST,
        msg: `Search cannot be performed: Error: ${err.message}`
      });
    }
  }
);

module.exports = router;
