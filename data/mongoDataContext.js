const mongoose = require('mongoose');
const logger = require('../utils/logger');

class MongoDataContext {
  static connectAsync(url) {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(logger.write(`MongoDB connection to ${url} is successful.`))
      .catch(err =>
        logger.write(
          `MongoDB connection to ${url} is not successful. Error: ${err}`
        )
      );
  }

  static disconnectAsync() {
    mongoose
      .disconnect()
      .then('MongoDB connection is disconnected.')
      .catch(err => `MongoDB connection cannot be disconnected. Error: ${err}`);
  }
}

module.exports = MongoDataContext;
