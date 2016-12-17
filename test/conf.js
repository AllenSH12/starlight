module.exports = function(app) {
  return function() {
    it('should expose a config object', function() {
      (app.config).should.be.a.Object();
    });

    it.skip('should include environment variables in config', function() {
      // ha.
    });
  }
}
