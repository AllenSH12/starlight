var Promise = require('bluebird');
var Bottle = require('bottlejs');
var express = require('express')
var config = require('./conf');

class App {
  constructor() {
    this.config = config;
    this.bottle = new Bottle();
    this.router = express();

    this.router.get('/', function(req, res) {
      res.send('hello world');
    });
  }

  listen(port) {
    const listen = Promise.promisify(this.router.listen);

    return listen(port);
  }
}

module.exports = App;
