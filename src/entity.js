var Promise = require('bluebird');
var AbstractEntity = require('./abstract-entity');

class Entity extends AbstractEntity {
  constructor(name, properties) {
    super(name, properties);
  }
}

module.exports = Entity;
