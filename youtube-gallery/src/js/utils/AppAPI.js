var AppActions = require('../actions/AppActions.js');
var Firebase = require('firebase');
var $ = require('jquery');

module.exports = {
   saveVideo: function(video){
       console.log('API CALLED', video)
       this.firebaseRef = new Firebase("https://yt-gallery-894d8.firebaseio.com/videos")
       this.firebaseRef.push(video)
    }
}