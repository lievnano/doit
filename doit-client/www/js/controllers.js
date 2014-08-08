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

.controller('LoginCtrl', function($scope, $state){
  $scope.login = function(){
    $state.go('tab.profile');
  };

})

.controller('ProfileCtrl', function($scope, Friends, $state, ToDoLoader) {
  $scope.friends = Friends;
  $scope.myEvents = ToDoLoader.events;
  $scope.events = function(){
    console.log('hey');
    $state.go('tab.events');
  };
  
})

.controller('ServedCtrl', function($scope, $state, ToDoLoader, $ionicModal, Count){
  $scope.toDo = ToDoLoader.events;
  var count = Count.count;
  $scope.info;
  $scope.goToDash = function(){
    $state.go('tab.dash');
    
  };

  $scope.countPlus = function(){
    console.log(Count.count);
  };


  $ionicModal.fromTemplateUrl('../templates/modal.html', {
  
    animation: 'slide-in-up',
    scope: $scope,

  }).then(function(modal){
    $scope.modal = modal;
    $scope.currentEvent = $scope.toDo[Count.count];
    console.log($scope.currentEvent);

  });

  $scope.openModal = function(index){
    $scope.event = ToDoLoader.events[index];
    $scope.modal.show();
  };
});

// .controller('ModalCtrl', function($scope, $ionicLoading) {
  
//   $scope.newUser = {};
  
//     $scope.createContact = function() {
//      $ionicLoading.show({
//                 template: '<i class="icon ion-loading-d" style="font-size: 32px"></i>',
//                 animation: 'fade-in',
//                 noBackdrop: false
//             });
//     console.log('Create Contact', $scope.newUser);
//     //$scope.modal.hide();
//   };
  
// });

