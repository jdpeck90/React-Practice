var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState() {
    return {
        movies: AppStore.getMovieResults()
    }
}

var App = React.createClass({
    getInitialState: function(){
        return getAppState();
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange)
    },
    render: function(){

        return (
            <div>
              Hi From Here!
            </div>
        )
    },
    
    _onChange: function(){
        this.setState(getAppState())
}
};

module.exports = App;