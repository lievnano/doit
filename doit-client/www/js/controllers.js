angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, DashOptions) {
  $scope.timeOptions = DashOptions.times();
  $scope.durationOptions = DashOptions.duration();
  $scope.typeOptions = DashOptions.types();
})

.controller('EventsCtrl', function($scope, Friends) {

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
})

.controller('LoginCtrl', function($scope, $state){
  $scope.login = function(){
    $state.go('tab.profile');
  };

})

.controller('ProfileCtrl', function($scope, Friends, $state) {
  $scope.friends = Friends;
  $scope.events = function(){
    $state.go('tab.events');
  };
  
});