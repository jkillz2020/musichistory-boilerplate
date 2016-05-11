"use strict"
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var listView = document.getElementById("list-view");
var addMusic = document.getElementById("add-song");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");
  listView.classList.remove("visible");
  addView.classList.add("visible");
  addView.classList.remove("hidden");

// addMusic.addEventListener("click", function(event))
});


// function addSong() {
//   document.getElementById("add-view")
//   document.
// }
