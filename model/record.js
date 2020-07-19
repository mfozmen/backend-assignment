const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  key: String,
  value: String,
  createdAt: Date,
  counts: Array
});

class Record {
  static searchAsync({ startDate, endDate, minCount, maxCount }) {
    return this.aggregate([
      {
        // Filter by dates.
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      },
      {
        $unwind: {
          path: '$counts'
        }
      },
      {
        $group: {
          _id: { key: '$key', createdAt: '$createdAt' },
          key: { $first: '$key' },
          createdAt: { $first: 'createdAt' },
          totalCount: {
            $sum: '$counts'
          }
        }
      },
      {
        $match: {
          totalCount: {
            $gte: minCount,
            $lte: maxCount
          }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]).exec();
  }
}

schema.loadClass(Record);

module.exports = mongoose.model('Record', schema);
