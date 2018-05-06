var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');


var CHANGE_EVENT = "change";

var _videos = [];

var AppStore = assign({}, EventEmitter.prototype, {
    saveVideo: function(video){
        _videos.push(video)
    },
    getVideos: function(){
       return _videos;
    },
    setVideos: function(videos){
        _videos = videos;
    },
    removeVideo: function(videoId){
        console.log('​videoId from STore', videoId);
        var idx = _videos.findIndex(x => x.id === videoId)
        console.log('​idx from store', idx);
        _videos.splice(idx, 1);
    },  
    emitChange: function(){
        this.emitChange(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeChangeListener('change', callback)
    }
})

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        case AppConstants.SAVE_VIDEO:
            //Store Save
            AppStore.saveVideo(action.video)
            
            //API Save
            AppAPI.saveVideo(action.video)    

            AppStore.emit(CHANGE_EVENT)
        break;
        case AppConstants.RECEIVE_VIDEOS:
            console.log('Receiving Videos from Store......')
            //Set Videos
            AppStore.setVideos(action.videos)
            
            AppStore.emit(CHANGE_EVENT)
        break;
        case AppConstants.REMOVE_VIDEO:
            console.log('Removing Video from Store......', action)
            //API Remove
            AppAPI.removeVideo(action.videoId)

            //Store Remove
            AppStore.removeVideo(action.videoId)
            
            AppStore.emit(CHANGE_EVENT)
        break;
    }
        return true;
})

module.exports = AppStore;