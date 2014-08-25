var dbOps = require('../dbOperations/adminDB');
var validator = require('validator');


module.exports = exports = {

  isUser : function(req,res,next){
    //TODO ** check that userID given in req is legit
    next();
  },

  login : function(req,res){
    // dbOps.checkUserExists(err,row){
    //   if
    // }
  },

  getEventsFromActivityID : function(req,res){

    if (!((validator.isInt(req.body.locationID) || req.body.locationID === undefined) &&
        validator.isInt(req.body.activityID) && validator.isDate(req.body.dateTimeToDo))) {
      var err = 'Invalid data sent';
      res.status(400).send(err);
      return;  
    }


    dbOps.getEventsFromActivityID(req.body.locationID, req.body.activityID, req.body.dateTimeToDo,
                                  function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else{
        res.status(200).send(rows);
      }
    })
  },
  getAllActivities : function(req, res){

    dbOps.getAllActivities(function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else{
        res.status(200).send(rows);
      }
    });
  },
  getCurrentActivities : function(req, res){
    //do check on request to make sure its good

    //send request to adminDB function and then send the resposne back to client
    dbOps.getUserCurrent(req.body.userID, function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else{
        res.status(200).send(rows);
      }
    });

  },
  getPreviousActivities : function(req, res){
    //do check on request to make sure its good



    //send request to adminDB function 
    //check that their dateTime hasn't expired
    //and then send the resposne back to client
    dbOps.getUserPrevious(req.body.userID, function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else{
        res.status(200).send(rows);
      }
    });
  },
  addRating : function(req,res){
    //do check on request to make sure its good

    if (!(validator.isInt(req.body.userID) && validator.isInt(req.body.userActivityID)
         && validator.isInt(req.body.rating))){

      var err = 'Invalid data sent';
      res.status(400).send(err);
      return;
    }

    dbOps.addRatingToActivity(req.body.userID, req.body.userActivityID, req.body.rating, function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else{
        res.status(200).send(rows);
      }
    });
  },


  addActivity : function(req,res){
    //do check on request to make sure its good

    if (!(validator.isInt(req.body.userID) && validator.isInt(req.body.activityID) && 
          validator.isInt(req.body.duration) && validator.isDate(req.body.startDateTime))){
      
      var err ='Invalid data sent';
      res.status(400).send(err);
      return;
    }

    //send request to adminDB function and then confirm to client that activity has been added...
    dbOps.setUserCurrent(req.body.userID, req.body.activityID, req.body.startDateTime,req.body.duration,
     req.body.placeID, function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else{
        res.status(200).send(rows);
      }
    });
  },


  getNewActivities : function(req,res){
    // do check on request to make sure its good
    if (!((validator.isInt(req.body.userID) || req.body.userID === undefined) && 
       (validator.isInt(req.body.locationID) || req.body.locationID === undefined) &&
       validator.isInt(req.body.duration) && validator.isInt(req.body.typeID)  &&
       validator.isDate(req.body.dateTimeToDo))){

      var err = 'Invalid data sent';
      res.status(400).send(err);
      return;
    }

    //send request to adminDB function and then send response back to client
    dbOps.getUserActivities(req.body.userID, req.body.locationID, req.body.duration, 
      req.body.typeID, req.body.dateTimeToDo, function(err,rows){
    
        if(err){
          console.log(err);
          res.status(500).send(err);
        }
        else{
          res.status(200).send(rows);
        }
    });
  },
  updateActivityToCompleted : function(req,res){
    //do check on request to make sure its good
    if (!(validator.isInt(req.body.userID) && validator.isInt(req.body.userActivityID) && 
        validator.isDate(req.body.endTime))){

      var err = 'Invalid data sent';
      res.status(400).send(err);
      return;
    }

    //send request to adminDB function and then send response back to client
    dbOps.updateActivityToCompleted(req.body.userID, req.body.userActivityID, req.body.endTime, 
      function(err,rows){
        if(err){
          console.log(err);
          res.status(500).send(err);
        }
        else{
          res.status(200).send(rows);
        }
      });
  },
};
