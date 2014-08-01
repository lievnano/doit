angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, DashOptions) {
  $scope.timeOptions = DashOptions.timeOptions();
  $scope.durationOptions = DashOptions.durationOptions();
  $scope.typeOptions = DashOptions.typeOptions();
  $scope.timeSelected = $scope.timeOptions[0];
  $scope.durationSelected = $scope.durationOptions[0];
  $scope.typeSelected = $scope.typeOptions[0];
  $scope.toDo = {};
  //three buttons for time, duration, and type
  //each opens up a modal with options from scope array
  $scope.sendToDo = function(x){
    console.log('object of things to Do: ', $scope.toDo);
    //send the object to appropriate factory and switch the page....
  }

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