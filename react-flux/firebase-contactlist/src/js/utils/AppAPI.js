var Firebase = require('firebase')
var AppActions = require('../actions/AppActions');
var $ = require('jquery');
var APIPath = 'https://reactfluxfierebase.firebaseio.com/contacts/'

console.log('getCOntacts Called')
module.exports = {
    saveContact: function(contact){
        this.firebaseRef = new Firebase(APIPath);
        this.firebaseRef.push({
            contact: contact
        })
    },
    
    getContacts: function(){
        this.firebaseRef = new Firebase(APIPath);
        this.firebaseRef.once("value", function(snapshot){
            var contacts = [];
            snapshot.forEach(function(childSnapshot){
                var contact = {
                    id: childSnapshot.key(),
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email
                }
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            })
        })
    },

    removeContact: function(contactId){

        console.log('222',APIPath,contactId)
        this.firebaseRef = new Firebase(APIPath + contactId.id)
        this.firebaseRef.remove();
    },
    updateContact: function(contact){
        var id = contact.id + '/contact';
        var updatedContact = {
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        }
        console.log('update from api',APIPath + id)
        this.firebaseRef = new Firebase(APIPath + id)
        this.firebaseRef.update(updatedContact);
    }
}