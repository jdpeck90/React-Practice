var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');


var CHANGE_EVENT = "change";

var _notes = [];

var AppStore = assign({}, EventEmitter.prototype, {
    addNote: function(note) {
    console.log('AddNote Store ​note1', note);
    
    _notes.push(note);
    },
    getNotes: function(){
        console.log('AddNote Store ​note2', _notes);
        return _notes; 
    },
    setNotes: function(notes){
        _notes = notes;
    },
    removeNote: function(noteId) {
        var indx = _notes.findIndex(x => x._id.$oid === noteId);
        _notes.splice(indx, 1)
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
      case AppConstants.ADD_NOTE:
      console.log('Adding Note...')

        // Store Save
        AppStore.addNote(action.note)
      
        // API Save
        AppAPI.addNote(action.note)

        // Emit Change
        AppStore.emit(CHANGE_EVENT);
      break;
    
      case AppConstants.RECIEVE_NOTES:
      console.log('Receiving Note...')

        // Store Save
        AppStore.setNotes(action.notes)
      
        // API Save

        // Emit Change
        AppStore.emit(CHANGE_EVENT);
      break;
     
      case AppConstants.REMOVE_NOTE:
      console.log('Removing Note...')

        // Store Save
        AppStore.removeNote(action.noteId)
        
        // API Removal
        AppAPI.removeNote(action.noteId)

        // Emit Change
        AppStore.emit(CHANGE_EVENT);
      break;
    }
    return true;
})

module.exports = AppStore;