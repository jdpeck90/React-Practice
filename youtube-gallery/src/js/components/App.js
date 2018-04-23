var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('../components/AddForm');

//holds all state values
function getAppState() {
    return {
        videos: AppStore.getVideos()
    }
}

var App = React.createClass({
    //the initial state
    getInitialState: function(){
        return getAppState();
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange)
    },
    //will render the app
    render: function(){
        console.log('Saving Video.......', this.state.videos)
        return (
            <div>
              <AddForm />
            </div>
        )
    },
    //will change render to new state
    _onChange: function(){
        this.setState(getAppState())
}
})

module.exports = App;