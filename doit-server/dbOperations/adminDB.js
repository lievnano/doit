module.exports = exports = {
  addActivity : function(activityName, description, uniquePlace,
                         placeCategoryID, placeID, imgLink, status,
                         participantsNeeded, occursOnce, startDateTime, 
                         endDateTime, openingTime, closingTime, minDuration, maxDuration){
    var sql = 'Insert into activities (activityName, description, \
              uniquePlace, placeCategoryID, placeID, imgLink, status, \
              participantsNeeded, startDateTime, endDateTime, openingTime, closingTime  timeOfDay, minDuration, \
              maxDuration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, arguments, function(err,res){
      return res.insertId;
    });
  },
  addPlace : function(locationID, placeName, address, description){
    var sql = 'Insert into places (locationID, placeName, address, description';
    connection.query(sql, arguments, function(err,res){
      return res.insertId;
    });
  },
  getPlaces : function(callback){
    var sql = 'Select placeName, placeID from places';
    connection.query(sql, function(err,res){
      callback(res);
    });
  },
};
