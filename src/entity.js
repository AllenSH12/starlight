var _ = require('lodash');
var Validator = require('jsonschema').Validator;

class Entity {
  constructor(name, properties) {
    this.validator = new Validator();
    this.instances = [];

    this.schema = {
      "id": name,
      "type": "object",
      properties
    }
  }

  onBeforeCreate(entity) {
    const expectedKeys = Object.keys(this.schema.properties);
    const cleanEntity = _.pick(entity, expectedKeys);

    return Promise.resolve(cleanEntity);
  }

  create(entity) {
    return this.onBeforeCreate(entity)
    .then((entity) => {
      const validationResult = this.validator.validate(entity, this.schema);

      if (validationResult.errors.length) {
        throw new Error('ValidationError', validationResult.errors);
      }

      return this.onAfterCreate(entity);
    });
  }

  onAfterCreate(entity) {
    return Promise.resolve(entity);
  }
}

module.exports = Entity;
