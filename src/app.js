var Bottle = require('bottlejs');
var config = require('./conf');
var Entity = require('./entity');

class App {
  constructor() {
    this.config = config;
    this.bottle = new Bottle();
  }

  entity(name, properties) {
    return new Entity(name, properties);
  }

}

module.exports = App;
