angular.module('doit.services', [])

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
    {title: 'Surfing in the Sunset', img:'http://www.personalluxuryresortsandhotels.com/i/SITE_120910_12161610_5R1BV/content/CMS_121005_16245907_J2FB7/7F45873D-188B-3B72-2E7EA991C83EDA3E.JPG', where: 'San Francisco', description:'Surfing on the beach of San Francisco!'},
    {title: 'Kayaking', img: 'http://www.adventurestateparks.com/!images/rotator/asp_adventure_mp_mainimage_01b.jpg', where: 'San Francisco', description: 'Kayaking in the bay!'},
    {title: 'Extreme Biking', img:'http://cdn.sunroom.co.nz/multidayadventures.co.nz/wp-content/uploads/2010/06/Fabian-Jump.jpg', where: 'San Francisco', description: 'Biking in the hills of Marin'},
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco', description: 'Hiking in the hills of Berkeley'}
  ];


  return loader;
})

.factory('Friends', function(){
  
  var friends = [
      {
      name: 'Thomas',
      img:'http://upload.wikimedia.org/wikipedia/commons/9/92/George_Clooney-4_The_Men_Who_Stare_at_Goats_TIFF09_(cropped).jpg'},
      {
      name: 'Kad',
      img:'http://weadiamedia.com/wp-content/uploads/2014/04/george-clooney-1.jpg'},
      {
      name: 'Suzanne',
      img: 'http://images.boomsbeat.com/data/images/full/51818/clooney_george-jpg.jpg'},
      {
      name: "Leon",
      img:'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/2/7/1391786293758/George-Clooney---Save-the-012.jpg'},
  ];

  return friends;

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
});

