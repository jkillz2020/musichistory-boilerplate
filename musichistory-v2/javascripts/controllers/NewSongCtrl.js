"use strict";
app.controller("NewSongCtrl", function($scope, $location, $rootScope, SongsFactory){
  $scope.newSong = {};

  $scope.addNewSong = function(){
    $scope.newSong.uid = $rootScope.user.uid;
    SongsFactory.postNewSong($scope.newSong).then(function(songId){
      $location.url("/songs/list");
    $scope.newSong= {};
    })
  }
})