var should = require('should');
var request = require('supertest');
var Starlight = require('.././src');
var testConfig = require('./conf');
var testEntity = require('./entity');

describe('App', function() {
  const app = new Starlight();

  describe('Config', testConfig(app));
  describe('Entity', testEntity());

  describe('Routing', function() {
    it('should be able to start an HTTP server', function(done) {
      const server = app.router.listen(3000, function() {
        request(app.router)
          .get('/')
          .expect(200)
          .end(() => done());
      });

      after(function() {
        server.close();
      });
    });
  });
});
