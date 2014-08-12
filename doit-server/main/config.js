var morgan = require('morgan');
var bodyParser = require('body-parser');
var middle = require('./middleware');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'doit'
});

module.exports = exports = function(app, express){
  var userDoItRouter = express.Router();
  var addEventRouter = express.Router();
  var profileRouter = express.Router();
  var curatorRouter = express.Router();
  var authRouter = express.router();
  var isCurator = function(req,res,next){
    next();
  };
  app.set('port', process.env.PORT || 3030);
  app.set('base url', process.env.URL || 'http://localhost');
  app.use(morgan('dev'));
  app.use(middle.cors);
  app.use('/curator/', curatorRouter);
  app.use('/auth', authRouter);
  require('../auth/auth_routes.js')(authRouter);
  require('../curator/curator_routes.js')(curatorRouter);

};