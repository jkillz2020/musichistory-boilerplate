"use strict"
let songs = [];
let moresongs = [];
let placeInDom = (function () {
 
  return {
    loadSongs: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      loader.open("GET", "songs.json")//tell loader where to go
      loader.send();//execute loader
      loader.addEventListener("load", function () {
        // Set the value of the private array
        songs = JSON.parse(this.responseText).songs;
        
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        callbackToInvoke(songs);
      });
    

      }
    }
}

    function placeInDom (songs) {
      console.log(songs);
      for (let song in songs) {
        let currentSong = songs[song]
        $(`#songlist`) .apend (`<div id='${i.id}' class='thisTrack'><h3>${i.Title}</h3><h5>${i.artist}</h5><h5>${i.album}</h5><h5>${i.genre}</h5><button type="" class="delButton">delete</button></div>`)
          }

$.ajax( {
  url: "https://mu2ik.firebaseio.com/songs/.json",
  }).done (function (songs) {
    placeInDom(songs);
  });


placeInDom();
}

// document.getElementById("songlist").innerHTML += "<div>" + songs[i] + "</div>";

  



