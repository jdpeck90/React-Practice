var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../store/AppStore');
var SearchForm = require('./SearchForm.js')
 /*----------  Footer Component  ----------*/
 
class SearchForm extends React.Component{
    render(){
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
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.refs.title.value)

        var movie = {
            title: this.ref.title.value.trim()
        }

        AppActions.searchMovies(movie);
    }
}

module.exports = SearchForm