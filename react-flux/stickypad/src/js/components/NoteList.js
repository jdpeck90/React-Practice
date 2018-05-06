var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note.js')

var NoteList = React.createClass({
    render: function() {
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
              {
                  this.props.notes.map(function(note, i){
                      return(
                          <Note note={note} key={i} />
                      )
                  })
              }
            </div>
        )
    },

    onSubmit: function(e) {
        e.preventDefault();

        console.log('from onSubmit',this.refs.text.value)

        var note = {
            text: this.refs.text.value.trim()
        }
        this.refs.text.value = '';
        AppActions.addNote(note)
    }
})

module.exports = NoteList;