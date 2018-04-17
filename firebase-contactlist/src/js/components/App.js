var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js')
var ContactList = require('./ContactList.js')

//holds all state values
function getAppState() {
    return {
         contacts: AppStore.getContacts()
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
        console.log(this.state.contacts)
        console.log(this.props)
        return (
            <div>
              <AddForm />
              <ContactList contacts={this.state.contacts}/>
            </div>
        )
    },
    //will change render to new state
    _onChange: function(){
        this.setState(getAppState())
}
})

module.exports = App;