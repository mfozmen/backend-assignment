const request = require('supertest');
const app = require('../app');

describe('/records', function () {
  it('searchs records', function (done) {
    request(app)
      .post('/records/search')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 2700,
        maxCount: 3000
      })
      .expect(200)
      .then(res => {
        console.log(res.body);
        done(null);
      })
      .catch(err => {
        console.log(err);
        done(err);
      });
  });
});
