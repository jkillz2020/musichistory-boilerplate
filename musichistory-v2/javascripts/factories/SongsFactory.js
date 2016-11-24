"use strict";

app.factory('SongsFactory', function($q, $http, FIREBASE_CONFIG){

  var getSongList=function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Songs.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(response){
          console.log("response", response)
          let songs =[];
          Object.keys(response).forEach(function(key){
            response[key].id=key;
            Songs.push(response[key]);
          });
          resolve(songs);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
    })
  }

  var postNewSong = function(newSong){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Songs.json`,
        JSON.stringify({
          title: newSong.title,
          artist: newSong.artist,
          album: newSong.album,
          uid: newSong.uid
        })
      )
        .success(function(postResponse){
          resolve(postResponse);
        })
        .error(function(postError){
          reject(postError);
        })
    })
  }

  var deleteSong =  function(songId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/Songs/${songId}.json`)
      .success(function(deleteResponse){
        console.log("success")
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      })
    })
  }

  var getSingleSong =  function(songId){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Songs/${songId}.json`)
      .success(function(getSingleResponse){
        console.log("success", getSingleResponse)
        resolve(getSingleResponse);
      })
      .error(function(getSingleError){
        reject(getSingleError);
      })
    })
  }


var editSong = function(editSong){
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/Songs/${editSong.id}.json`, 
        JSON.stringify({
          title: editSong.title,
          artist: editSong.artist,
          album: editSong.album,
          uid: editSong.uid
      })
    )
      .success(function(editResponse){
        resolve(editResponse);
      })
      .error(function(editError){
        reject(editError);
      })
    })
  }


  return {getSongList:getSongList,
          postNewSong:postNewSong,
          deleteSong:deleteSong,
          getSingleSong:getSingleSong,
          editSong:editSong
        }
     
});
