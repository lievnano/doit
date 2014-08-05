var morgan = require('morgan');
var bodyParser = require('bodyParser');
var middle = require('./middleware');

module.exports = exports = function(app, express){
  var userDoItRouter = express.Router();
  var addEventRouter = express.Rotuer();
  var profileRouter = express.Router();
  app.set('port', process.env.PORT || 3030);
  app.set('base url', process.env.URL || 'http://localhost');
  app.use(morgan('dev'));
  app.use(middle.cors);

};