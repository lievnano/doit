angular.module('doit.controllers', [])


.controller('DashCtrl', function($scope, $state, DashOptions, ToDoLoader) {

  $scope.timeOptions = DashOptions.timeOptions();
  $scope.durationOptions = DashOptions.durationOptions();
  $scope.typeOptions = DashOptions.typeOptions();
  $scope.toDo = ToDoLoader.getToDoSpec();
  //three buttons for time, duration, and type
  //each opens up a modal with options from scope array

  $scope.sendToDo = function(){
    // ToDoLoader.loadToDoSpec($scope.toDo);
    $state.go('served-events');
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

.controller('LoginCtrl', function($scope, $state, OpenFB){
  $scope.login = function(){
    OpenFB.login();
    $state.go('tab.profile');
  };

})

.controller('ProfileCtrl', function($scope, Friends, $state, ToDoLoader, RecentEvents) {
  $scope.rate = 0;
  $scope.max = 5;
  $scope.user = {
    name: 'Doug Calhoun',
    location: 'San Francisco',
    personality: 'Chill',
  };

  $scope.myEvents = RecentEvents.events;

  $scope.events = function(){
    // console.log('hey');
    $state.go('tab.events');
  };
  
})

.controller('ServedCtrl', function($scope, $state, ToDoLoader, $ionicModal, Count, RecentEvents){
  $scope.toDo = ToDoLoader.events;
  $scope.recentEvents = RecentEvents.events;
  var count = Count.count;
  $scope.event;
  
  $scope.goToDash = function(){
    $state.go('tab.dash');
  };

  $ionicModal.fromTemplateUrl('../templates/modal.html', {
  
    animation: 'slide-in-up',
    scope: $scope,

  }).then(function(modal){
    $scope.modal = modal;
    
    $scope.createEvent = function(){
      $scope.recentEvents.unshift($scope.toDo[3]);
      console.log($scope.recentEvents.length);

      $scope.modal.hide();
      $state.go('tab.profile');
    };


  });


  $scope.openModal = function(index){
    $scope.event = ToDoLoader.events[index];
    $scope.modal.show();
  };

})

.controller('ActivitiesCtrl', function($scope, $stateParams, $state, ToDoLoader, RecentEvents){
  $scope.max = 5;
  $stateParams.activityId;
   $scope.profile = function(){
    $state.go('tab.profile');
  };
  $scope.activity = RecentEvents.events[$stateParams.id];
});

