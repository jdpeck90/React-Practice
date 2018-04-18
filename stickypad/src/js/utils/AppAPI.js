var AppActions = require('../actions/AppActions.js');
var $ = require('jquery');

module.exports = {
   addNote: function(note){
       console.log('From API', note)
       $.ajax({
           url:"https://api.mongolab.com/api/1/databases/reactstickypad/collections/notes?apiKey=XyjmY4QZ5zOW0ODTttIBTE0EQBsCQ-fz",
           data: JSON.stringify(note),
           type: "POST",
           contentType: "application/json"
       });
   },

   //Retrieve notes from mongoDB
   getNotes: function(note){
       console.log('From API', note)
       $.ajax({
           url:"https://api.mongolab.com/api/1/databases/reactstickypad/collections/notes?apiKey=XyjmY4QZ5zOW0ODTttIBTE0EQBsCQ-fz",
           dataType: 'json',
           cache: false,
           success: function(data) {
               console.log('success', data);
               AppActions.receiveNotes(data);
           }.bind(this),
           error: function(xhr, status, err) {
               console.log('Error From getNotes ---> ', err);
           }.bind(this)
       });
    },

    //Remove note from mongoDB
    removeNote: function(noteId){
        $.ajax({
            url:"https://api.mongolab.com/api/1/databases/reactstickypad/collections/notes?apiKey=XyjmY4QZ5zOW0ODTttIBTE0EQBsCQ-fz",
            dataType: 'json',
            type: "DELETE",
            async: true,
            timeout: 300000,
            success: function(data) {
                console.log('success', data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('Error From removeNote ---> ', err);
            }.bind(this)
        });
   }

}