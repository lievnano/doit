var controller = require('./user_controller.js');

module.exports = exports = function(route){
  route.post('/getPreviousActivities', controller.isUser, controller.getPreviousActivities);
  route.post('/addActivity', controller.isUser, controller.addActivity);
  route.post('/getNewActivities', controller.isUser, controller.getNewActivities);

};
