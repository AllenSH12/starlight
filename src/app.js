var Promise = require('bluebird');
var Bottle = require('bottlejs');
var express = require('express')
var RateLimit = require('express-rate-limit');
var config = require('./conf');

class App {
  constructor() {
    this.config = config;
    this.bottle = new Bottle();
    this.router = express();

    var limiter = new RateLimit({
      windowMs: 15 * 60 * 1000,
      max: 10,
      delayMs: 0
    });

    this.router.use(limiter);

    this.router.get('/', function(req, res) {
      res.send('hello world');
    });
  }
}

module.exports = App;
