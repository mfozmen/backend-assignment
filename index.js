require('dotenv').config();
var app = require('./app');
const logger = require('./utils/logger');

app.listen(process.env.PORT, function () {
  let port = process.env.PORT;

  logger.write(`Getir api is listening on ${port}`);
});
