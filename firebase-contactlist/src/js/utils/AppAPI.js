var Firebase = require('firebase')
var AppActions = require('../actions/AppActions.js');
var $ = require('jquery');
var APIPath = 'https://reactfluxfierebase.firebaseio.com/contacts'


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
                console.log('​contact', contact);
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            })
        })
    }



}