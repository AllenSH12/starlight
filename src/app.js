var Bottle = require('bottlejs');
var config = require('./conf');

class App {
  constructor() {
    this.config = config;
    this.bottle = new Bottle();
  }
}

module.exports = App;
