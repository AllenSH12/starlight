var should = require('should');
var Starlight = require('.././src');
var testConfig = require('./conf');
var testEntity = require('./entity');
var testHttpServer = require('./http-server');

describe('App', function() {
  const app = new Starlight();

  describe('Config', testConfig(app));
  describe('Entity', testEntity());
  describe('Routing', testHttpServer(app));
});
