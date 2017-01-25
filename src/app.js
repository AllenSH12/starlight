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

    this.router.get('/', function(req, res) {
      console.log('HIT HIT HIT');
      res.send('hello world');
    });

    var limiter = new RateLimit({
      windowMs: 10,
      max: 5,
      delayMs: 0
    });

    this.router.use(limiter);
  }
}

module.exports = App;
