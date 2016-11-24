"use strict";

app.controller('SongEditCtrl', function($scope, $routeParams, $location, SongsFactory){
  $scope.newSong = {};
  let contactId = $routeParams.id;
  
  SongsFactory.getSingleSong(songId).then(function(oneSong){
    oneSong.id= songId;
    $scope.newSong = oneSong;
  })

  $scope.addNewSong = function(){
    SongsFactory.editSong($scope.newSong).then(function(response){
      $scope.newSong={};
      $location.url("/songs/list")
    })
  }
})