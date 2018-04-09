import React, { Component } from 'react';

class Results extends Component {
  render() {
      var percent = (this.props.score / this.props.questions.length * 100);
      if(percent > 80) {
          var message = "Awesome Job!";
      } else if(percent < 80 && percent > 60) {
          var message = "You Did OK!";
      } else {
          var message = "You SUCK!";
      }

    return (
      <div className="well">
       <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
       <h1> {percent}% - {message}</h1>
       <hr />
       <a href="/public">Take Again</a>
      </div>
    );
  }
}

export default Results;
