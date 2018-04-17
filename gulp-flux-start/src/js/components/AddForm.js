var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//holds all state values
function getAppState() {
    return {
        movies: AppStore.getMovieResults()
    }
}

var App = React.createClass({
    //will render the app
    render: function(){

        return (
            <div class="well">
                <h3>AddContact</h3>
                <form action="" onSubmit={this.handleSubmit}>
                        <div class="form-group"><input type="text" ref="name" className="form-control" placeholder=""></div>
                        <div class="form-group"><input type="text" ref="phone" className="form-control" placeholder=""></div>
                        <div class="form-group"><input type="text" ref="email" className="form-control" placeholder=""></div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        )
    },
    //will change render to new state
    _onChange: function(){
        this.setState(getAppState())
}
};

module.exports = App;