var dbOps = require('../dbOperations/adminDB');

module.exports = exports = {
  isCurator : function(req,res,next){
    next();
  },
  addPlace : function(req, res){
    //check variables are good...
    dbOps.addPlace(req.body.locationID, req.body.placeName, req.body.address, req.body.description, req.body.imgLink, 
                  function(err,rows){
                    if (err){
                      res.send(500,err);
                    }
                    else{
                      res.send(200,rows);
                    }
                  });
  },
  addActivity : function(req,res){
    //the following line is long... contains all params from addActicity in dbOps, callback function on second line 
    dbOps.addActivity(req.body.activityName, req.body.description, req.body.uniquePlace, req.body.placeCategoryID, req.body.placeID, req.body.imgLink, req.body.status, req.body.participantsNeeded, req.body.occursOnce, req.body.startDateTime, req.body.endDateTime, req.body.openingTime, req.body.closingTime, req.body.minDuration, req.body.maxDuration, req.body.typeID,
                      function(err,rows){
                        if (err){
                          res.send(500,err);
                        }
                        else{
                          res.send(200,rows);
                        }
                      });
  },
  getPlaces : function(req,res){
    dbOps.getPlaces(function(err, rows){
      if (err){
        res.send(500,err);
      }
      else{
        res.send(200,rows);
      }
    });
  },
  getTypes  : function(req,res){
    dbOps.getTypes(function(err,rows){
      if (err){
        res.send(500,err);
      }
      else{
        res.send(200,rows);
      }
    });
  },
};
