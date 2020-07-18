const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

app.use(bodyParser.json());

app.use(morgan('combined'));
Object.keys(routes).forEach(route => {
  app.use(`/${route}`, routes[route]);
});

module.exports = app;
