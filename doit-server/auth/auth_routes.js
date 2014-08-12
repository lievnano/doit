var controller = require('./auth_controller.js');
var passport = require('./auth.js');

module.exports = exports = function(route){
  route.get('/auth/facebook/callback',
    passport.authenticate('facebook', {session: false, failureRedirect: '/'}),
    controller.authenticate);
};