angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, DashOptions, $rootScope, $state) {
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
    $rootScope.toDo = $scope.toDo;
    $scope.served();
    //send the object to appropriate factory and switch the page....
  };

  $scope.served = function(){
      $state.go('served-events');
    };
    //send the object to appropriate factory and switch the page...
})

.controller('EventsCtrl', function($scope, Friends, $state) {
  $scope.profile = function(){
    $state.go('tab.profile');
  };
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

.controller('ServedCtrl', function($scope, $state){
  $scope.goToDash = function(){
    $state.go('tab.dash');
    
  };
});
