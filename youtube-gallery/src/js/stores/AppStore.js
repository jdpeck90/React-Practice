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
            console.log('saving video from actions',action);
            //Store Save
            AppStore.saveVideo(action.video)
            
            //API Save
            AppAPI.saveVideo(action.video)    

            AppStore.emit(CHANGE_EVENT)
    }
        return true;
})

module.exports = AppStore;