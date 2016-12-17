var Validator = require('jsonschema').Validator;

class AbstractEntity {
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
    return new Promise((resolve) => {
      resolve(entity);
    });
  }

  create(entity) {
    return this.onBeforeCreate(entity)
    .then((entity) => {
      const validationResult = this.validator.validate(entity, this.schema);

      if (validationResult.errors.length) {
        throw new Error('Foo', validationResult.errors);
      }

      return entity;
    });
  }
}

module.exports = AbstractEntity;
