var should = require('should');
var starlight = require('.././src');
var testConfig = require('./conf');

describe('App', function() {
  const app = starlight.app();

  it('should return an app object', function() {
    (app).should.be.a.Object();
  });

  describe('Config', testConfig(app));
});
