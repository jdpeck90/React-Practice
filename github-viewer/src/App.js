import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Profile from './Components/Profile.js';
import Search from './Components/Search.js';
import $ from 'jquery'; 

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

  //get user data
  getUserData() {
    $.ajax({
      url:`https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          userData:data
        })
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({
          username:null
        })
        alert(err);
      }.bind(this)
    })
  }

  //get user repos
  getUserRepos() {
    $.ajax({
      url:`https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_secret=${this.props.clientSecret}&sort=created`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          userRepos:data
        })
        console.log('From Repo',data)
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({
          username:null
        })
        alert(err);
      }.bind(this)
    })
  }

  //handle form in Search.js
  handleFormSubmit(username) {
    this.setState({username: username}, function(e){
      console.log('console.log from handle form submit', e)
      this.getUserData();
      this.getUserRepos();
    })
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div className="App">
          <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
          <Profile {...this.state}/>
      </div>
    );
  }

}

//set prop data types
App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
}

//set default props
App.defaultProps = {
  clientId: '6584790f086e32ac5ec6',
  clientSecret: '2e24b340d475f03c644e5da5a7ab677f0bb7aa30'
}

export default App;
