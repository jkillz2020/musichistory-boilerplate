"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=> {
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
})

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

    let logged = AuthFactory.isAuthenticated();
    let appSon;

    if(currRoute.originalPath){
      appSon = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    if(!appSon && !logged){
      event.preventDefault();
      $location.path("/auth");
    }
  })
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/songs/list', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl',
      resolve: {isAuth}
    })
    .when('/songs/new', {
      templateUrl: 'partials/new-song.html',
      controller: 'NewSongCtrl',
      resolve: {isAuth}
    })
    .when('/songs/view/:id', {
      templateUrl: 'partials/song-view.html',
      controller: 'SongViewCtrl',
      resolve: {isAuth}
    })
    .when('/songs/edit/:id', {
      templateUrl: 'partials/new-song.html',
      controller: 'SongEditCtrl',
      resolve: {isAuth}
    })
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('/auth')
})