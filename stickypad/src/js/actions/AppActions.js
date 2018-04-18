var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var AppActions = {
    addNote: function(note){
        console.log('from Actions', note)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_NOTE,
            note: note
        });
    },
    receiveNotes: function(notes){
        console.log('from Actions', notes)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECIEVE_NOTES,
            notes: notes
        });
    },
    removeNote: function(noteId){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_NOTE,
            noteId: noteId
        })
    }
}

module.exports = AppActions; 