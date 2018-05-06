var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddNoteForm = React.createClass({
    render: function() {
        return (
            <div>
                <h5></h5>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="large-12 columns">
                            <label> Note Text
                                <input type="text" ref="text" placeholder="" />
                                <button className="button">Add</button>
                             </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    },

    onSubmit: function(e) {
        e.preventDefault();

        console.log('from onSubmit',this.refs.text.value)
        if(this.refs.text.value.length > 69) {
            alert('please write a smaller note, these sticky notes are pretty small');
            this.refs.text.value = '';
            return;
        } else {
            var note = {
                text: this.refs.text.value.trim()
            }
            AppActions.addNote(note)
        }
    }
})

module.exports = AddNoteForm;