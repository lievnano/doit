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
        describe: 'Take a trip to Baker Beach and enjoy the sun and waves!'
      }
    },
    // {
    //   title: 'Kayaking',
    //   img: 'http://www.adventurestateparks.com/!images/rotator/asp_adventure_mp_mainimage_01b.jpg',
    //   where: 'San Francisco',
    //   description: {
    //     time: '12pm',
    //     location: 'The Bay',
    //     describe: 'Kayaking in the bay is easy! Go to Joes Crab Shack, rent a couple of boats and get your Kayak on!',
    //   },
    // },
    {title: 'Hiking', img:'http://www.real-adventure.co.uk/uploads/site/144/real_adventure_091__large.jpg', where: 'San Francisco',  description: {
        time: '12pm',
        location: 'The Bay',
        describe: 'Hiking in the bay is easy! Go to Joes Crab Shack, rent a couple of boots and get your Kayak on!',
      }},

  ];


    return recentEvents;
})

.factory('OpenFB', function ($rootScope, $q, $window, $http, MatchLoader) {

    var FB_LOGIN_URL = 'http://zavadil7.cloudapp.net/auth/facebook';
    // By default we store fbtoken in sessionStorage. This can be overriden in init()
    var localStorage = window.localStorage;
    var oauthRedirectURL = 'http://zavadil7.cloudapp.net/linden/passman/dustytoken/';
    // Because the OAuth login spans multiple processes, we need to keep the success/error handlers as variables
    // inside the module instead of keeping them local within the login function.
    var deferredLogin;
    // Indicates if the app is running inside Cordova
    var runningInCordova;
    // Used in the exit event handler to identify if the login has already been processed elsewhere (in the oauthCallback function)
    var loginProcessed;

    document.addEventListener("deviceready", function () {
        runningInCordova = true;
    }, false);

    /**
     * @param redirectURL - The OAuth redirect URL. Optional. If not provided, we use sensible defaults.
     * @param store - The store used to save the Facebook token. Optional. If not provided, we use sessionStorage.
     */
    function init(redirectURL, store) {
        if (redirectURL) oauthRedirectURL = redirectURL;
        if (store) localStorage = store;
    }

    /**
     * Login to Facebook using OAuth. If running in a Browser, the OAuth workflow happens in a a popup window.
     * If running in Cordova container, it happens using the In-App Browser. Don't forget to install the In-App Browser
     * plugin in your Cordova project: cordova plugins add org.apache.cordova.inappbrowser.
     * @param fbScope - The set of Facebook permissions requested
     */
    function login() {
      var loginWindow;
      // fbScope used if we want to request data from facebook
      var fbScope;
      deferredLogin = $q.defer();
      loginProcessed = false;
      logout();
      // _blank: forces an entire new browser to open (instead of a tab): need to open new browser in order to watch URL
      // location: hides the urls
      // todo: put location=no back in
      loginWindow = window.open(FB_LOGIN_URL , '_blank');

      // If the app is running in Cordova, listen to URL changes in the InAppBrowser until we get a URL with an access_token or an error
      if (runningInCordova) {
        loginWindow.addEventListener('loadstart', function (event) {
          var url = event.url;
          url = url.split('?');
          if (url[0] === oauthRedirectURL) {
            loginWindow.close();
            oauthCallback(url[1]);
          }
        });

        loginWindow.addEventListener('loadstop', function(event){
            var url = event.url;
            console.log('this is token: ', url);
        });

      } else {
        // apparently this is not possible cross-domain
        // loginWindow.addEventListener('load', function () {
        //   console.log('sssssuuuuup')
        // });

      }
      // Note: if the app is running in the browser the loginWindow dialog will call back by invoking the
      // oauthCallback() function. See oauthcallback.html for details.

      return deferredLogin.promise;

    }

   /* *
     * Called either by oauthcallback.html (when the app is running the browser) or by the loginWindow loadstart event
     * handler defined in the login() function (when the app is running in the Cordova/PhoneGap container).
     * @param url - The oautchRedictURL called by Facebook with the access_token in the querystring at the ned of the
     * OAuth workflow. */
     
    function oauthCallback(url) {
        // Parse the OAuth data received from Facebook
        var apiKey;
        var userToken;
        var obj;
        console.log('inside of oAuth, heres the url: ',  url);
        loginProcessed = true;
        var apiKeyIndex = url.indexOf('apiKey');
        var userTokenIndex = url.indexOf('token');
        if (apiKeyIndex !== -1 && userTokenIndex !== -1) {
            apiKey = url.slice(url.indexOf('=') + 1);
            console.log('setting token, heres the object', apiKey);
            localStorage.setItem('jwtToken', apiKey);
            console.log('localStorage.getItem', localStorage.getItem('jwtToken'));

            // find second '=', then use substring from there
            userToken = url.slice.indexOf('=', url.indexOf('=') + 1) + 1;

            // remove the last 4 characters that fb attaches, that we don't want
            userToken = userToken.slice(0, -4);
            localStorage.setItem('userToken', userToken);

            // MatchLoader.loadAllMatches().then(function(results) {
            //   $rootScope.allMatches = results.data;
            //   console.log($rootScope.allMatches);
            //   for (var i = 0; i < results.data.length; i++) {
            //     if(results.data[i].is_male === 1) {
            //     results.data[i]['pic'] = 'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg';
            //     } else {
            //       results.data[i]['pic'] = 'http://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg';
            //     }
            //   }
            //   $rootScope.potentialMatches = $rootScope.allMatches.slice(0, 20);
            //   $rootScope.allMatches = $rootScope.allMatches.slice(20);
            // });
            deferredLogin.resolve();
        } else {
            deferredLogin.reject();
        }
    }
    /**
     * Application-level logout: we simply discard the token.
     */
    function logout() {
        console.log('logout before', localStorage.getItem('jwtToken'));
        localStorage.setItem('jwtToken', '');
        console.log('logout after', localStorage.getItem('jwtToken'));

        localStorage.setItem('userToken', '');
    }

    /**
     * Helper function to de-authorize the app
     * @param success
     * @param error
     * @returns {*}
     */
    function revokePermissions() {
        return api({method: 'DELETE', path: '/me/permissions'})
            .success(function () {
                console.log('Permissions revoked');
            });
    }

    /**
     * Lets you make any Facebook Graph API request.
     * @param obj - Request configuration object. Can include:
     *  method:  HTTP method: GET, POST, etc. Optional - Default is 'GET'
     *  path:    path in the Facebook graph: /me, /me.friends, etc. - Required
     *  params:  queryString parameters as a map - Optional
     */
    function api(obj) {

        var method = obj.method || 'GET',
            params = obj.params || {};

        params['access_token'] = localStorage['fbtoken'];

        return $http({method: method, url: 'https://graph.facebook.com' + obj.path, params: params})
            .error(function(data, status, headers, config) {
                if (data.error && data.error.type === 'OAuthException') {
                    $rootScope.$emit('OAuthException');
                }
            });
    }

    /**
     * Helper function for a POST call into the Graph API
     * @param path
     * @param params
     * @returns {*}
     */
    function post(path, params) {
        return api({method: 'POST', path: path, params: params});
    }

    /**
     * Helper function for a GET call into the Graph API
     * @param path
     * @param params
     * @returns {*}
     */
    function get(path, params) {
        return api({method: 'GET', path: path, params: params});
    }

    function parseQueryString(queryString) {
        var qs = decodeURIComponent(queryString),
            obj = {},
            params = qs.split('&');
        params.forEach(function (param) {
            var splitter = param.split('=');
            obj[splitter[0]] = splitter[1];
        });
        return obj;
    }

    return {
        init: init,
        login: login,
        logout: logout,
        revokePermissions: revokePermissions,
        api: api,
        post: post,
        get: get,
        oauthCallback: oauthCallback
    };

});

// Global function called back by the OAuth login dialog
function oauthCallback(url) {
    var injector = angular.element(document.getElementById('main')).injector();
    injector.invoke(function (OpenFB) {
        OpenFB.oauthCallback(url);
    });
}


