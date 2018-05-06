var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//holds all state values
function getAppState() {
    return {
 
    }
}

var AddForm = React.createClass({
    //will render the app
    render: function(){

        return (
            <div className="well">
                <h3>AddContact</h3>
                <form action="" onSubmit={this.handleSubmit}>
                        <div className="form-group"><input type="text" ref="name" className="form-control" placeholder="Please Enter Name" /></div>
                        <div className="form-group"><input type="text" ref="phone" className="form-control" placeholder="Please Enter Phone Number" /></div>
                        <div className="form-group"><input type="text" ref="email" className="form-control" placeholder="Please Enter Email" /></div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        )
      },

      handleSubmit: function(e) {
          e.preventDefault();

          var contact = {
              name: this.refs.name.value.trim(),
              phone: this.refs.phone.value.trim(),
              email: this.refs.email.value.trim()
          }

          AppActions.saveContact(contact);
      }

})

module.exports = AddForm;