angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, DashOptions, ToDoLoader) {
  $scope.timeOptions = DashOptions.timeOptions();
  $scope.durationOptions = DashOptions.durationOptions();
  $scope.typeOptions = DashOptions.typeOptions();
  $scope.toDo = ToDoLoader.getToDoSpec();
  //three buttons for time, duration, and type
  //each opens up a modal with options from scope array
  $scope.sendToDo = function(){
    ToDoLoader.loadToDoSpec($scope.toDo);
    // ToDoLoader.getToDos();
      //send the object to appropriate factory and switch the page....
  };

})

.controller('FriendsCtrl', function($scope, Friends, ToDoLoader) {
  // $scope.friends = Friends.all();

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