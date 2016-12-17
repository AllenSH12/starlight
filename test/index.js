var should = require('should');
var starlight = require('.././src');
var testConfig = require('./conf');
var testEntity = require('./entity');

describe('App', function() {
  const app = starlight.app();

  it('should return an app object', function() {
    app.should.be.a.Object();
  });

  describe('Config', testConfig(app));
  describe('Entity', testEntity(app));
});
