"use strict";

app.controller('NavCtrl', function($scope){
  $scope.navItems = [
    {
      name:"Logout",
      url: "#/logout"
    }, 
    {
      name:"All Songs",
      url:"#/songs/list"
    }, 
    {
      name:"New Song",
      url: "#/songs/new"
    }
  ];
});