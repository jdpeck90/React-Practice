import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*----------  About Page Component  ----------*/
class PageAbout extends Component {
    render() {
        return(
            <div className="row">
                <p>{this.props.title}</p>
            </div>
    
        )
    }
}

export default PageAbout;

PageAbout.propTypes = {
    brand: PropTypes.string, 
    color: PropTypes.string 
  }

  PageAbout.defaultProps = {
    brand: 'company', 
    color: 'light',
    home: 'Home',
    about: 'About' 
  }

  