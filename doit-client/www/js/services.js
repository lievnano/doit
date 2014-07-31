angular.module('doit.services', [])

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
});

// .factory('UserDescription', function(){

//   var description = [
//     {
//       name: 'Favorite Activity',
//       content: 'Running In Park',
//       count: 10
//     },
//   ]
// })