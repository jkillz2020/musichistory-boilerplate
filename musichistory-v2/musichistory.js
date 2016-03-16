"use strict"
let songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.shift("Everything In Its Right Place > by Radiohead on the album Kid A");
songs.push("Down Rodeo > by Rage Against the Machine on the album Evil Empire");

  for(let i = 0; i < songs.length; i++){
   songs[i] = songs[i].replace(">", "-");
   songs[i] = songs[i].replace("!", "");
   songs[i] = songs[i].replace("*", "");
   songs[i] = songs[i].replace("@", "");
   songs[i] = songs[i].replace("(", "");



document.getElementById("songlist").innerHTML += "<div>" + songs[i] + "</div>";
};
  



