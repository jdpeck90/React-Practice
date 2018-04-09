import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'jdpeck90',
      userData: [],
      userRepos: [],
      perPage: 5

    }
  }
  render() {
    return (
      <div>
       {this.props.clientID}
      </div>
    );
  }
}

export default App;
App.propTypes = {
    clientID: PropTypes.string,  
    clientSecret: PropTypes.string
  }

  App.defaultProps = {
    clientID: '6584790f086e32ac5ec6', 
    clientSecret: '2e24b340d475f03c644e5da5a7ab677f0bb7aa30'
  }
