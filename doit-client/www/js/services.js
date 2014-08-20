angular.module('doit.services', ['ionic'])

// .factory('LoginCheck', function(){
//   //check login and send user to login page if they are not logged in...
// })

.factory('ToDoLoader', function(){
  var toDoSpec = {};
  var loader = {};
  loader.loadToDoSpec = function(toDo){
    toDoSpec = toDo;
  };
  loader.getToDoSpec = function(){
    return toDoSpec;
  };

  loader.events = [
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Extreme Biking in the bay is easy! Go to Joes Crab Shack, rent a couple of bikes and get your Kayak on!',
    }},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
    }},
    {
      title: 'Surfing in the Sunset',
      img:'http://www.personalluxuryresortsandhotels.com/i/SITE_120910_12161610_5R1BV/content/CMS_121005_16245907_J2FB7/7F45873D-188B-3B72-2E7EA991C83EDA3E.JPG',
      where: 'San Francisco',
      description:{
        time: '10am',
        location: 'Baker Beach',
        describe: 'Take a trip to Baker Beach and enjoy the sun and waves!'
      }
    },
    {
      title: 'Kayaking',
      img: 'http://www.adventurestateparks.com/!images/rotator/asp_adventure_mp_mainimage_01b.jpg',
      where: 'San Francisco',
      description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Kayaking in the bay is easy! Go to Joes Crab Shack, rent a couple of boats and get your Kayak on!',
      },
    },
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Extreme Biking in the bay is easy! Go to Joes Crab Shack, rent a couple of bikes and get your Kayak on!',
      }},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Extreme Biking in the bay is easy! Go to Joes Crab Shack, rent a couple of bikes and get your Kayak on!',
      }},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Extreme Biking in the bay is easy! Go to Joes Crab Shack, rent a couple of bikes and get your bike on!',
      }},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Extreme Biking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Extreme Biking in the bay is easy! Go to Joes Crab Shack, rent a couple of bikes and get your Kayak on!',
      }},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }}
  ];


  return loader;
})

.factory('DashOptions', function(){
  var options = {};
  //might want sliders for the time options so you can select between some times...
  options.timeOptions = function(){
    //maybe add in commented out times later... right now focus on 24 hour activities for mvp!
    var times = ['now', '30 minutes from now', '1 hour from now', 'in a few hours', 'tonight', ]; // 'tomorrow', 'this weekend', 'next weekend'];
    return times;
  };
  options.durationOptions = function(){
    var durations = ['5 minutes', '15 minutes', '30 minutes', '1 hour', '1 - 3 hours', 'all day', 'multiple days'];
    return durations;
  };
  options.typeOptions = function(){
    var types = ['adventurous', 'rocking', 'intense', 'chill', 'fun', 'classic'];
    return types;
  };
  return options;
})

.factory('Count', function(){
  
  var countOptions = {
    count: 0,
    add: function(){
      count++;
    }
  };


  return countOptions;
})

.factory('RecentEvents', function(){
  var toDoSpec = {};
  var recentEvents = {};
  recentEvents.loadToDoSpec = function(toDo){
    toDoSpec = toDo;
  };
  recentEvents.getToDoSpec = function(){
    return toDoSpec;
  };

  recentEvents.events = [
    {
      title: 'Surfing in the Sunset',
      img:'http://www.personalluxuryresortsandhotels.com/i/SITE_120910_12161610_5R1BV/content/CMS_121005_16245907_J2FB7/7F45873D-188B-3B72-2E7EA991C83EDA3E.JPG',
      where: 'San Francisco',
      description:{
        time: '10am',
        location: 'Baker Beach',
        describe: 'Take a trip to Baker Beach and enjoy the sun and waves!',
      }
    },
    {
      title: 'Kayaking',
      img: 'http://www.adventurestateparks.com/!images/rotator/asp_adventure_mp_mainimage_01b.jpg',
      where: 'San Francisco',
      description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Kayaking in the bay is easy! Go to Joes Crab Shack, rent a couple of boats and get your Kayak on!',
      },
    },
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},

  ];


    return recentEvents;
})

.factory('serverRequest', function($http){
  var requestObject = {};

  requestObject.get = function(route){
    return $http.get('do-it-server.cloudapp.net/' + route)
          .success(function(data, status, headers, config){
            console.log(data);
           })
          .error(function(data, status, headers, config){
            console.log(data);
          });
  };

  requestObject.post = function(route, data){
    return $http.post('do-it-server.cloudapp.net/' + route, data)
            .success(function(){
              console.log('data has been posted');
            });
  };

  return requestObject;
});

