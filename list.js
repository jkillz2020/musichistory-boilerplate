"use strict"
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addView = document.getElementById("add-view");

listLink.addEventListener("click", function(event) {
addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});