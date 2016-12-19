var _ = require('lodash');
var Promise = require('bluebird');
var Validator = require('jsonschema').Validator;
var memoryStore = require('./stores/memory-store');

class Entity {
  constructor(name, properties) {
    this.validator = new Validator();
    this.instances = [];

    this.store = new memoryStore();

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

      if (this.store) {
        return Promise.resolve(this.store.create(entity))
        .then(this.onAfterCreate);
      }

      return this.onAfterCreate(entity);
    });
  }

  onAfterCreate(entity) {
    return Promise.resolve(entity);
  }
}

module.exports = Entity;
