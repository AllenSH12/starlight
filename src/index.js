var conf = require('./conf');

module.exports = {
  app: function() {
    return {
      config: conf
    };
  }
}
