var dbOps = require('../dbOperations/adminDB');

module.exports = exports = {
  isUser : function(req,res,next){
    next();
  },
  getPreviousActivities : function(req, res){
    
  },
  addActivity : function(req,res){

  },
  getNewActivities : function(req,res){
     // getUserActivities : function(userID, locationID, whenStart, duration, typeID, dateTimeToDo, timeToDo, callback){
     console.log(req.body);
     // doOps.getUserActivities()
  }
};
