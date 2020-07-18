const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
const Record = require('../model/record');

router.post('/search', function (req, res) {
  res.status(HttpStatus.OK).send(req.body);
});

module.exports = router;
