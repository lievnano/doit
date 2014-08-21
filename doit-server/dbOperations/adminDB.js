var doit_pass = require('./dbCredentials').password;

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'doit',
    password : doit_pass,
});
// uncomment the following when password is correctly set...
 // connection.connect();

module.exports = exports = {

  getAllActivities : function(callback){
    var sql = 'Select * from activities';
    connection.query(sql, function(err,rows){
      if (err){
        callback(err);
      }
      else{
        callback(null,rows);
      }
    });
  },
  addActivity : function(activityName, description, uniquePlace, 
                       placeCategoryID, placeID, imgLink, status, 
                       participantsNeeded, occursOnce, startDateTime, 
                       endDateTime, openingTime, closingTime, minDuration, 
                       maxDuration, typeID, callback){
    var sql = 'Insert into activities (activityName, description, \
              uniquePlace, placeCategoryID, placeID, imgLink, status, \
              participantsNeeded, occursOnce, startDateTime, endDateTime, openingTime, \
              closingTime, minDuration, maxDuration) \
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    connection.query(sql, [activityName, description, uniquePlace, placeCategoryID, placeID, imgLink, status, 
                           participantsNeeded, occursOnce, startDateTime,  endDateTime, openingTime,
                           closingTime, minDuration, maxDuration],
    function(err,rows){
      if (err){
        callback(err);
      }
      else{
        console.log('fooo', rows.insertId, typeID);
        setTimeout(function(){exports.addTypeToActivities(rows.insertId, typeID, callback)},200);
      }
    });
  },
  addPlace : function(locationID, placeName, address, description, imgLink, callback){
    var sql = 'Insert into places (locationID, placeName, address, description, imgLink) \
               VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [locationID, placeName, address, description, imgLink], function(err,res){
      if(err){  
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },
  getPlaces : function(callback){
    var sql = 'Select id as placeID, placeName from places';
    connection.query(sql, function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },
  getActivities : function(callback){
    var sql = 'Select activityID, activityName, description, imgLink from activities';
    connection.query(sql, function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },
  getTypes : function(callback){
    var sql = 'Select id, type from activity_types';
    connection.query(sql, function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });    
  },
  addActivityTypes : function(type, callback){
    var sql = 'Insert into activity_types (type) Values (?)';
    connection.query(sql, [type], function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },
  addTypeToActivities : function(activityID, typeID, callback){
    var sql = 'INSERT INTO activity_types_join (activityID, activityTypeID) \
              SELECT * FROM (SELECT ?, ?) AS tmp \
              WHERE NOT EXISTS ( \
                SELECT activityID, activityTypeID FROM activity_types_join \
                WHERE activityID = ? and activityTypeID = ?) LIMIT 1;'
    connection.query(sql, [activityID,typeID,activityID,typeID], function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }  
    });
  },
  //need to set up location for laters....
  getUserActivities : function(userID, locationID, whenStart, duration, typeID, dateTimeToDo, timeToDo, callback){
    var sql = 'Select a.id as activityID, a.activityName, a.description as activityDescription, a.imgLink as activityImage, \
               a.startDateTime, a.endDateTime, a.openingTime, a.closingTime, \
              p.placeName, p.address, p.description as placeDescription, p.imgLink as placeImage \
              From \
              activities as a \
              left Join places as p \
              on a.placeID = p.id \
              inner join activity_types_join as a_t \
              on a_t.activitytypeID = ? and a.id = a_t.activityID \
              where a.minDuration <= ? and a.maxDuration >= ?  \
              and (a.startDateTime is NULL or a.startDateTime >= Cast(? as dateTime)) \
              and (a.endDateTime is NULL or a.endDateTime <= Cast(? as dateTime)) \
              and (a.openingTime is NULL or a.openingTime <= Cast(? as Time)) \
              and (a.closingTime is NULL or a.closingTime >= Cast(? as Time)) \
              group by a.id \
              limit 10';
    connection.query(sql, [typeID, duration, duration, dateTimeToDo, dateTimeToDo, dateTimeToDo, dateTimeToDo], function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },

  setUserCurrent : function(userID, activityID, startDateTime,duration, placeID,callback){
    var sql = 'Insert into user_activities (status, userID, activityID, startDateTime, duration, placeID) \
              Values (?, ?,?,?,?,?)';
    connection.query(sql, ['inprogress', userID,activityID,startDateTime,duration,placeID], function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },

  getUserCurrent : function(userID, callback){
    var sql = 'Select ua.id as userActivityID, ua.startDateTime, ua.duration, a.id as activityID, a.activityName, a.description as activityDescription, a.imgLink as activityImage, \
              p.placeName, p.address, p.description as placeDescription, p.imgLink as placeImage \
              From \
              user_activities as ua \
              inner join activities as a on a.id = ua.activityID \
              left join places as p on p.id = ua.placeID \
              where ua.userID = ? and ua.status = ?';
    connection.query(sql, [userID, 'inprogress'], function(err, res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }
    });
  },
  //could add comments or rating here....
  updateActivityToCompleted : function(userID, userActivityID, endTime, callback){
    var sql = 'Update user_activities Set endTime=?, status=? where id=? and userID=?'
    connection.query(sql, [endTime, 'completed', userActivityID, userID], function(err,res){
      if (err){
        callback(err);
      }
      else{
        callback(null, res);
      }      
    });
  },
  getPlaceCategories : function(callback){
    var sql = 'Select id as placeCategoryID, placeCategory, description from place_categories';
    connection.query(sql, function(err,rows){
      if (err){
        callback(err);
      }
      else{
        callback(null, rows);
      }
    });
  },
  getUserPrevious : function(userID, callback){
    var sql = 'Select ua.id as userActivityID, ua.startDateTime, ua.duration, ua.endDateTime, a.id as activityID, a.activityName, a.description as activityDescription, a.imgLink as activityImage, \
              p.placeName, p.address, p.description as placeDescription, p.imgLink as placeImage \
              FROM \
              user_activities as ua \
              INNER JOIN activities as a on a.id = ua.activityID \
              left join places as p on p.id = ua.placeID \
              where ua.userID = ? and ua.status = ?';
    connection.query(sql, [userID, 'completed'], function(err, rows){
      if (err){
        callback(err);
      }
      else{
        callback(null, rows);
      }
    });
  }



};
