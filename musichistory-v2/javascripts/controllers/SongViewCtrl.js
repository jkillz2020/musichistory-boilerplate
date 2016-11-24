"use strict";

app.controller('SongViewCtrl', function($scope, $routeParams, SongsFactory){
  $scope.selectedSong = {};
  let songId = $routeParams.id;

  SongsFactory.getSingleSong(songId).then(function(oneSong){
    oneSong.id=songId
    $scope.selectedSong = oneSong;
  })
})