var AppActions = require('../actions/AppActions.js');
var Firebase = require('firebase');
var $ = require('jquery');



var baseURL = "https://yt-gallery-894d8.firebaseio.com/videos"

module.exports = {
   saveVideo: function(video){
       this.firebaseRef = new Firebase(baseURL)
       this.firebaseRef.push(video)
    },
    getVideos: function() {
        this.firebaseRef = new Firebase(baseURL)
        this.firebaseRef.once("value", function(snapshot){
            var videos = [];
            snapshot.forEach(function(childSnapshot){
                var video = {
                    id: childSnapshot.key(),
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description
                }
                videos.push(video);
                AppActions.receiveVideos(videos)
            })
            
        })
    },
    removeVideo: function(videoId) {
        this.firebaseRef = new Firebase(baseURL + "/" + videoId);
        this.firebaseRef.remove();
    }
}
