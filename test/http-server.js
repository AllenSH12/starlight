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

    it('should be rate-limited', function(done) {
      const requests = _.range(100).map((i) => {
        const MAX_CONNECTIONS = 9; // Really 10 but we already used one of the requests in the prior test
        const expectedCode = (i < MAX_CONNECTIONS) ? 200 : 429;

        return request(app.router).get('/').expect(expectedCode);
      });

      Promise.all(requests).then(() => done())
    });

    after(function() {
      server.close();
    });
  }
}
