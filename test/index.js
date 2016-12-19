var should = require('should');
var Starlight = require('.././src');
var testConfig = require('./conf');
var testEntity = require('./entity');

describe('App', function() {
  const app = new Starlight();

  describe('Config', testConfig(app));
  describe('Entity', testEntity());
});
