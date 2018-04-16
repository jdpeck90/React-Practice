var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('../components/SearchForm');

var SearchForm = React.createClass({
    render: function(){
            return(
                <div className="search-form">
                   <h1 className="text-center"> Search For A Movie </h1>
                   <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="enter a title..." />
                    </div>
                    <button className="btn btn-primary btn-block"> Search Movies </button>
                   </form>
                </div>
            )
    },

    onSubmit: function(e) {
        e.preventDefault();
        console.log(this.refs.title.value);

        var movie = {
            title: this.refs.title.value.trim()
        }

        AppActions.searchMovies(movie)

    }
});

module.exports = SearchForm;