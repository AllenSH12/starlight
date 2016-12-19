var Entity = require.main.require('src/entity');

module.exports = function() {
  return function() {
    var TEST_ENTITY = {
      name: 'Foo',
      properties: {
        "firstName": {
          "type": "string"
        }
      }
    };

    it('should allow registering new entities', function() {
      new Entity(TEST_ENTITY.name, TEST_ENTITY.properties).should.be.ok;
    });

    it('should allow creating new instances of an entity', function() {
      var GOOD_FOO = { firstName: "Homer" };

      var Foo = new Entity(TEST_ENTITY.name, TEST_ENTITY.properties);

      return Foo.create(GOOD_FOO)
      .then(function(result) {
        result.should.have.property('firstName', 'Homer');
      });
    });

    it('should reject improperly formatted instances', function() {
      var BAD_FOO = { firstName: 0 };

      var Foo = new Entity(TEST_ENTITY.name, TEST_ENTITY.properties);

      return Foo.create(BAD_FOO).catch.should.be.called;
    });

    it('should remove properties not found in the schema definition', function() {
      var OK_FOO = { firstName: 'Homer', lastName: 'Simpson' };

      var Foo = new Entity(TEST_ENTITY.name, TEST_ENTITY.properties);

      return Foo.create(OK_FOO)
      .then(function(result) {
        result.should.have.property('firstName');
        result.should.not.have.property('lastName');
      });
    });
  }
}
