module.exports = function(app) {
  return function() {
    it('should expose a method to register entities', function() {
      app.entity.should.be.a.Function();
    });

    it('should allow registering entities', function() {
      app.entity('Foo', {}).should.be.ok;
    });

    it('should have a schema', function() {
      app.entity('Foo', {}).schema.should.exist;
    });

    it('should allow creating instances of the entity', function(done) {
      var Foo = app.entity('Foo', {});

      Foo.create({}).then(() => done());
    });

    it('should reject invalid documents', function(done) {
      var Foo = app.entity('Foo', {
        "firstName": {
    			"type": "string"
    		}
      });

      Foo.create({ firstName: 0 }).catch(function() {
        done();
      });
    });

    it('should test', function() {
      var Foo = app.entity('Foo', {});

      Foo.create();
    });
  }
}
