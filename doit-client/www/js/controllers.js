angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, DashOptions, ToDoLoader, $state) {
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
    $scope.served();
  };

  $scope.served = function(){
      $state.go('served-events');
  };
    //send the object to appropriate factory and switch the page...
})


.controller('EventsCtrl', function($scope, Friends, $state, ToDoLoader) {
  $scope.toDo = ToDoLoader.events;
  $scope.profile = function(){
    $state.go('tab.profile');
  };
})

.controller('FriendsCtrl', function($scope, Friends, ToDoLoader) {

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
    console.log('hey');
    $state.go('tab.events');
  };
  
})

.controller('ServedCtrl', function($scope, $state, ToDoLoader){
  $scope.toDo = ToDoLoader.events;
  $scope.goToDash = function(){
    $state.go('tab.dash');
    
  };

   $scope.kill = function(index) {
    $scope.toDo.splice(index, 1);
  };

});
