var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({

    //will render the app
    render: function () {

        return (
            <div>
                <form onSubmit={this.searchText} className="well">

                    <div className="form-group">
                        <label>Search For Something</label>
                        <input text="text" ref="text" className="form-control"/>
                    </div>
                </form>
            </div>
        )
    },
    //will change render to new state

    searchText: function(e){
        e.preventDefault();
        var search = {
            text: this.refs.text.value.trim()
        }
        AppActions.searchText(search)
    }
})

module.exports = SearchForm;