var morgan = require('morgan');
var bodyParser = require('body-parser');
var middle = require('./middleware');

module.exports = exports = function(app, express){

  app.use(morgan('dev'));
  app.use(middle.cors);
  app.use(bodyParser.json());

  var userDoItRouter = express.Router();
  var addEventRouter = express.Router();
  var profileRouter = express.Router();
  var curatorRouter = express.Router();
  var userRouter = express.Router();

  var authRouter = express.Router();
  var isCurator = function(req,res,next){
    next();
  };
  app.set('port', process.env.PORT || 80);
  app.set('base url', process.env.URL || 'http://localhost');

  
  app.use('/curator', curatorRouter);
  app.use('/auth', authRouter);
  app.use('/user', userRouter);


  require('../auth/auth_routes.js')(authRouter);
  require('../curator/curator_routes.js')(curatorRouter);
  require('../user/user_routes.js')(userRouter);

};