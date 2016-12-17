var should = require('should');
var starlight = require('.././src');

describe('App', function() {
  it('should export an app method that returns an app object', function() {
    starlight.app.should.exist;
  });

  it('should return an app object', function() {
    (starlight.app()).should.be.a.Object();
  });
});
