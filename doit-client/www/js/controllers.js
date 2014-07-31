angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, DashOptions) {
  $scope.timeOptions = DashOptions.times();
  $scope.durationOptions = DashOptions.duration();
  $scope.typeOptions = DashOptions.types();
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('LoginCtrl', function($scope, $state){
  $scope.login = function(){
    $state.go('tab.profile');
  };

})

.controller('ProfileCtrl', function($scope, Friends) {
  $scope.friends = Friends;
  
})