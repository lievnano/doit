angular.module('doit.controllers', [])

.controller('DashCtrl', function($scope, $state, DashOptions, ToDoLoader, serverRequest, $rootScope) {

  $scope.timeOptions = DashOptions.timeOptions();
  $scope.durationOptions = DashOptions.durationOptions();
  $scope.typeOptions = DashOptions.typeOptions();
  $scope.toDo = ToDoLoader.getToDoSpec();
  //three buttons for time, duration, and type
  //each opens up a modal with options from scope array

  $scope.sendToDo = function(){
    // new date object to be invoked and called when function is run
    var typeFormatter = function(toDo){
      if (toDo === 'adventurous') {
        return 1;
      } else if (toDo === 'rocking') {
        return 2;
      } else if (toDo === 'intense') {
        return 3;
      } else if (toDo === 'chill') {
        return 4;
      } else if (toDo === 'fun') {
        return 5;
      } else if (toDo === 'classic') {
        return 6;
      }
    };
    var userTime = function(time){
      // if (time === )
      if (time === 'now') {
        return 0;
      } else if (time === '30 minutes from now') {
        return 30;
      } else if (time === '1 hour from now') {
        return 60;
      } else if (time === 'in a few hours') {
        return 180;
      } else {
        return 'not a valid time';
      }
    };
    // change time formatter to server side logic
    var timeFormatter = function(time) {
      var date = new Date();
      var time = date.getTime() + (time * 60000);
      var updatedDate = new Date(time);
      return updatedDate;
    };

    // change durationConverter to server side logic
    var durationConverter = function(duration) {
      if (duration === '5 minutes') {
        return 1;
      } else if (duration === '15 minutes') {
        return 2;
      } else if (duration === '30 minutes') {
        return 3;
      } else if (duration === '1 hour') {
        return 4;
      } else if (duration === '1 - 3 hours') {
        return 5;
      } else if (duration === 'all day') {
        return 6;
      } else {
        return 'not a valid duration';
      }
    };

    var date = timeFormatter(userTime($scope.toDo['time']));
    var type = typeFormatter($scope.toDo['type']);
    console.log($scope.toDo);
    console.log(date);

    serverRequest.post('user/getNewActivities', {
      userID: 1,
      locationID: 2,
      dateTimeToDo: date,
      typeID: type,
      duration: durationConverter($scope.toDo['duration'])
    }).success(function(data, status){
      // console.log('data');
      $rootScope.events = data;
      console.log($rootScope.events);
      // $state.go('served-events');

    })
  };

  $scope.served = function(){
  };

    //send the object to appropriate factory and switch the page...
})


.controller('EventsCtrl', function($scope, $state, ToDoLoader) {
  $scope.toDo = ToDoLoader.events;
  $scope.profile = function(){
    $state.go('tab.profile');
  };
})


.controller('LoginCtrl', function($scope, $state){
  $scope.login = function(){
    oauth.login();
    $state.go('tab.profile');
  };

})

.controller('ProfileCtrl', function($scope, $state, ToDoLoader, RecentEvents, $rootScope) {
  $scope.rate = 0;
  $scope.max = 5;
  $scope.user = {
    name: 'Doug Calhoun',
    location: 'San Francisco',
    personality: 'Chill',
  };

  $scope.recentEvents = $rootScope.pastEvents
  

  $scope.events = function(){
    $state.go('tab.events');
  };
  
})

.controller('ServedCtrl', function($scope, $state, ToDoLoader, $ionicModal, Count, RecentEvents, $rootScope, serverRequest){
  $scope.toDo = ToDoLoader.events;
  $scope.recentEvents = RecentEvents.events;
  $scope.rootScope.events;
  var count = Count.count;
  // $scope.event;
  
  $scope.goToDash = function(){
    $state.go('tab.dash');
  };

  $ionicModal.fromTemplateUrl('../templates/modal.html', {
  
    animation: 'slide-in-up',
    scope: $scope,

  }).then(function(modal){
    $scope.modal = modal;
    
    $scope.createEvent = function(){
      serverRequest.post('user/addActivity', {
      userID: 1,
      tokenID: 2,
      activityID: 3,
      startDateTime: new Date(),
      duration: 4,
      placeID: null,
      })
      .success(function(data, status){
        console.log('activity has been added');
        $state.go('tab.profile');
      });


      $scope.modal.hide();
    };


  });


  $scope.openModal = function(index){
    $scope.event = ToDoLoader.events[index];
    $scope.modal.show();
  };

})

.controller('ActivitiesCtrl', function($scope, $stateParams, $state, ToDoLoader, RecentEvents){
  $scope.max = 5;
   $scope.profile = function(){
    $state.go('tab.profile');
  };
  $scope.activity = RecentEvents.events[$stateParams.id];
})

.controller('MapsCtrl', function(){

})