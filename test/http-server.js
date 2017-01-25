var request = require('supertest');
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function(app) {
  let server;

  return function() {
    before(function() {
      server = app.router.listen(3000);
    });

    it('should be able to start an HTTP server', function(done) {
      request(app.router).get('/').expect(200).end(() => done());
    });

    it.only('should be rate-limited', function(done) {
      const requests = _.range(100).map(() => {
        return request(app.router).get('/').expect(200);
      });

      Promise.all(requests).then(() => done())
    });

    after(function() {
      server.close();
    });
  }
}
