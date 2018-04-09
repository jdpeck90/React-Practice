import React, { Component } from 'react';
import './App.css';
import QuestionList from './Components/QuestionList.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions:[
        {
          id:1,
          text: "what is your name?",
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Bob'
            },
            {
              id: 'c',
              text: 'Bill'
            }
          ],
          correct: 'b'
      },
        {
          id:2,
          text: "what is your Mother's name?",
          choices: [
            {
              id: 'a',
              text: 'Teri'
            },
            {
              id: 'b',
              text: 'Jennifer'
            },
            {
              id: 'c',
              text: 'Marry'
            }
          ],
          correct: 'a'
      },
        {
          id:3,
          text: "what is your Father's name?",
          choices: [
            {
              id: 'a',
              text: 'Paul'
            },
            {
              id: 'b',
              text: 'John'
            },
            {
              id: 'c',
              text: 'Gary'
            }
          ],
          correct: 'c'
      }
    ],
    score:0,
    current:1
    }
  }
  render() {
    return (
      <div className="App">
        <QuestionList {...this.state}/>
      </div>
    );
  }
}

export default App;
