var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');


var CHANGE_EVENT = "change";

var _contacts = [];
var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {

    //Push new contact to array of contacts
    saveContact: function(contact) {
        _contacts.push(contact);
    },

    //Return array of contacts
    getContacts: function() {
        return _contacts;
    },

    //Add new contact
    setContacts: function(contacts) {
        _contacts = contacts;
    },
    removeContact: function(contactId) {
        var index = _contacts.findIndex(x => x.id === contactId );
            _contacts.splice(index,1)
    }, 
    //Updates existing contact
    setContactToEdit: function(contact) {
        _contact_to_edit = contact;
    }, 
    //Return contact to edit
    getContactToEdit: function() {
        return _contact_to_edit;
    }, 
    updateContact: function(contact) {
        for(i=0; i < _contacts.length; i++){
            if(_contacts[i].id == contact.id){
                _contacts.splice(i,1);
                _contacts.push(contact);
            }
        }
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
            console.log('saving contact....');

            //StoreSave
            AppStore.saveContact(action);

            //Save to API
            AppAPI.saveContact(action)

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECIEVE_CONTACTS:
            console.log('receiving Contacts...', action);
            //get contacts
            AppStore.setContacts(action.contacts);

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_CONTACT:
            console.log('removing Contact...');
            //remove contact from Front End
            AppStore.removeContact(action.contactId);
            
            //remove contact from Firebase DB
            AppAPI.removeContact(action.contactId);

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.EDIT_CONTACT:
            console.log('editting Contact...');
            //edit contact from Front End
            AppStore.setContactToEdit(action.contact);
            
            //edit contact from Firebase DB
            AppAPI.removeContact(action.contact);

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.UPDATE_CONTACT:
            console.log('updating Contact...');
            //Update Front End
            AppStore.updateContact(action.contact);
            
            //Update API
            AppAPI.updateContact(action.contact);

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
   }
        return true;
})

module.exports = AppStore;