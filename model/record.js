const mongoose = require('mongoose');

const Record = new mongoose.Schema({
  key: String,
  value: String,
  createdAt: Date,
  counts: Array
});

module.exports = mongoose.model('Record', Record);
