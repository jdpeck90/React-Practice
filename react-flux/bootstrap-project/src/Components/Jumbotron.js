import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*----------  Jumbrotron Component  ----------*/
class Jumbotron extends React.Component {

  
  render() {
    return(
      <div className="jumbotron">
            <div className="container">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
               <p><a className="btn btn-primary btn-lg" href='{this.props.link}' role="button">Learn more &raquo;</a></p>
            </div>
          </div>
        )
      }
    };
    Jumbotron.PropTypes = {
      heading: PropTypes.string, 
      text: PropTypes.string,
      link: PropTypes.string 
    }

    Jumbotron.defaultProps = {
      heading: 'Welcome!',
      text: 'Welcome to our shiny new site',
      link: 'http://google.com'
      };
    export default Jumbotron;
    