var config = require('./conf');
var Entity = require('./entity');

const entity = (name, properties) => {
  return new Entity(name, properties);
}

module.exports = {
  app: () => ({
    config,
    entity
  })
}
