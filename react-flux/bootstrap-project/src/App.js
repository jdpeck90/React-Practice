import React, { Component } from 'react';
import './App.css';
import PageHome from './Components/PageHome.js';
import Navbar from './Components/Navbar.js';
import Jumbotron from './Components/Jumbotron.js';
import Footer from './Components/Footer.js';
import About from './Components/About.js';



/*----------  MAIN APP COMPONENT  ----------*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home'}

    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)

  }

  handleAboutClick() {
    this.setState( { page: 'about' } )
  }

  handleHomeClick() {
    this.setState({ page: 'home' })
  }

  render() {
    if(this.state.page ==='home') {
      var jumbotron = <Jumbotron />;
    } else if(this.state.page === 'about') {
        var jumbotron = '';
      }

    return (
      <div className="App">
        <Navbar 
            color="dark"
            page={this.state.page}
            brand="Best Company Ever!"
            homeClick={this.handleHomeClick}
            aboutClick={this.handleAboutClick}
            />
        {jumbotron}
        <PageHome />
        <Footer />
      </div>
    );
  }
}

App.defaultProps = {
 page: 'home' 
};

export default App;

