var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var AppActions = {
    // Save Contact Name, Email to FBDB
   saveContact: function(contact){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        });
        
   },
   // Get + Display Contact Info
   receiveContacts: function(contacts){
       console.log('contacts in receiving', contacts);
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECIEVE_CONTACTS,
            contacts: contacts
        })
   },

   // Remove row of contact information
   removeContact: function(contactId) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_CONTACT,
            contactId: contactId
        });
    },
    // Edit contact information
    editContact: function(contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_CONTACT,
            contact: contact
        });
    },
    // Remove row of contact information
    updateContact: function(contact) {
         AppDispatcher.handleViewAction({
             actionType: AppConstants.UPDATE_CONTACT,
             contact: contact
         });
     }
}

module.exports = AppActions;