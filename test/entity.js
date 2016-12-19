var Entity = require.main.require('src/entity');

module.exports = function() {
  return function() {
    it('should allow registering new entities', function() {
      new Entity('Foo', {
        "firstName": {
          "type": "string"
        }
      }).should.be.ok;
    });

    it('should allow creating new instances of an entity', function() {
      var GOOD_FOO = { firstName: "Homer" };

      var Foo = new Entity('Foo', {
        "firstName": {
          "type": "string"
        }
      });

      return Foo.create(GOOD_FOO)
      .then(function(result) {
        result.should.have.property('firstName', 'Homer');
      });
    });

    it('should reject improperly formatted instances', function() {
      var BAD_FOO = { firstName: 0 };

      var Foo = new Entity('Foo', {
        "firstName": {
          "type": "string"
        }
      });

      return Foo.create(BAD_FOO).catch.should.be.called;
    });
  }
}
