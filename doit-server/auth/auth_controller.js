// this is where route logic goes.
var makeUrlSuffix = require('./makeUrlSuffix');
module.exports = exports = {

  authenticate: function(req, res) {
    var urlSuffix = makeUrlSuffix.makeUrlSuffix(req);
    res.redirect('redirect Url' + urlSuffix);
  }
};