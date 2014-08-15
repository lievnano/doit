module.exports = exports = {

    addActivity : function(activityName, description, uniquePlace, 
                         placeCategoryID, placeID, imgLink, status, 
                         participantsNeeded, occursOnce, startDateTime, 
                         endDateTime, openingTime, closingTime, minDuration, maxDuration){
    var sql = 'Insert into activities (activityName, description, \
              uniquePlace, placeCategoryID, placeID, imgLink, status, \
              participantsNeeded, startDateTime, endDateTime, openingTime, \
              closingTime  timeOfDay, minDuration, maxDuration) \
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, arguments, function(err,res){
      return res.insertId;
    });
  },
  addPlace : function(locationID, placeName, address, description, imgLink){
    var sql = 'Insert into places (locationID, placeName, address, description, imgLink) \
               VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, arguments, function(err,res){
      return res.insertId;
    });
  },
  getPlaces : function(callback){
    var sql = 'Select placeID, placeName from places';
    connection.query(sql, function(err,res){
      callback(res);
    });
  },
  getActivities : function(callback){
    var sql = 'Select activityID, activityName, description, imgLink from activities';
    connection.query(sql, function(err,res){
      callback(res);
    });
  },
  getTypes : function(callback){
    var sql = 'Select id, type from activity_types';
    connection.query(sql, function(err,res){
      callback(res);
    });    
  },
  addActivityTypes : function(type){
    var sql = 'Insert into activity_types (type) Values (?)';
    connection.query(sql, [type], function(err,res){
      return res.insertId;
    });
  },
  addTypeToActivities : function(activityID, typeID){
    var sql = 'INSERT INTO activity_types_join (activityID, activityTypeID) \
              SELECT * FROM (SELECT ?, ?) AS tmp \
              WHERE NOT EXISTS ( \
                SELECT activityID, activityTypeID FROM activity_types_join \
                WHERE activityID = ? and activityTypeID = ?) LIMIT 1;'
    connection.query(sql, [activityID,typeID,activityID,typeID], function(err,res){
      return res.insertId;
    });
  },
  //need to set up location for laters....
  getUserActivities : function(userID, locationID, whenStart, duration, typeID, dateTimeToDo, timeToDo, callback){
    var sql = 'Select a.id, a.activityName, a.description as activityDescription, a.imgLink, \
              p.placeName, p.address, p.description, p.imgLink \
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
              group by id \
              limit 10';
    connection.query(sql, [typeID, duration, duration, dateTimeToDo, dateTimeToDo, timeToDo, timeToDo], function(err,res){
      if (err){
        throw(err);
      }
      else{
        callback(res);
      }
    });
  },

  setUserCurrent : function(userID, activityID, startDateTime,duration, placeID){
    var sql = 'Insert into activities_inprogress (userID, activityID, startDateTime, duration, placeID) \
              Values (?,?,?,?,?)';
    connection.query(sql, [userID,activityID,startDateTime,duration,placeID], function(err,res){
      return res.insertId;
    });
  },



};
