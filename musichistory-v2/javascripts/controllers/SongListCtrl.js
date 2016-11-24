"use strict";

app.controller("SongListCtrl", function($scope, $rootScope, SongsFactory){
  $scope.songs = [];

  let getSongs = function(){
    SongsFactory.getSongList($rootScope.user.uid).then(function(fbSongs){
      $scope.Songs=fbSongs;
  })
}

getSongs();

  $scope.deleteSong = function(songId){
    console.log("you deleted song", songId);
    SongsFactory.deleteSong(songId).then(function(response){
      console.log("here now", response)
      getSongs();
    })
  }
})