var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');


var CHANGE_EVENT = "change";

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {
    getContacts: function() {
       return _contacts;
    },
    saveContact: function(contact) {
        _contacts.push(contact);
    },
    setContacts: function(contacts) {
        console.log('from Store',contacts)
        _contacts: contacts;
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
        case AppConstants.SAVE_CONTACT:
            console.log('saving contact');

            //StoreSave
            AppStore.saveContact(action.contact);

            //Save to API
            AppAPI.saveContact(action.contact)

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECIEVE_CONTACTS:
            console.log('receiving Contacts...');

            //get contacts
            AppStore.setContacts(action.contacts);

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
   }
        return true;
})

module.exports = AppStore;