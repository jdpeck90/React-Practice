import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {

    render() {
      if(this.props.color == 'dark') {
        var navClass = 'navbar navbar-inverse';
      } else {
        var navClass = 'navbar navbar-default';
      }
      var homeActive = '';
      var aboutActive = '';
      //highlight active menu item
      if(this.props.page == 'home') {
        homeActive = 'active';
       } else if (this.props.page == 'about') {
          aboutActive = 'active';
       }
      return(
        <div>
          <h1>{this.props.brand}</h1>
          <nav className={navClass}>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">{this.props.brand}</a>
              </div>
          
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li onClick={this.props.homeClick} className={homeActive}><a href="#">{this.props.home} <span classNames="sr-only">(current)</span></a></li>
                  <li><a onClick={this.props.aboutClick} className={aboutActive} href="#">{this.props.about}</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                      
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Link</a></li>
                  <li className="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
        </div>
      )
    }
  };

  Navbar.propTypes = {
    brand: PropTypes.string, 
    color: PropTypes.string 
  }

  Navbar.defaultProps = {
    brand: 'company', 
    color: 'light',
    home: 'Home',
    about: 'About' 
  };

export default Navbar;
  