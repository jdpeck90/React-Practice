import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: ['initialText'],
            count: 0
        }
    }

    componentWillMount() {
        var events = this.state.events;
        console.log(events, 'firstWillMount')
        events.push('WillMount')
        console.log(events, 'secondWillMount')
        this.setState({
            events: events
        })
    }

    componentDidMount() {
        var events = this.state.events;
        events.push('DidMount')
        this.setState({
            events: events
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, 'nextProps')
        var newBullet = nextState.events.push('Update from shouldComponentUpdate')
        console.log(nextState, 'nextState')
        if(nextState.count > 4){
          return false;
        }

        return newBullet
    }

    componentWillUpdate() {
        var willUpdateEvents = this.state.events
        willUpdateEvents.push('update from componentWillUpdate')
        console.log(willUpdateEvents, 'willUpdate')
    }

    componentDidUpdate(){
      var componentDidUpdateEvent = 'update from componentDidUpdate'
      var currentState = this.state.events
      var count = this.state.count
      count += 1
      currentState.push(componentDidUpdateEvent, count)
      this.setState({
        events: currentState,
        count: count
      })
      console.log(this.state.count)
    }

    render() {
        var eventNode = this.state.events.map((event) => {
            return <li> { event } </li>
        })

        return (
          <div className = "App" >
            <ul style = {
                {
                    justifyContent: 'left',
                    alignItems: 'left',
                    textAlign: 'left',
                }
            }>
            { eventNode }
            </ul>
          </div >

        );
    }
}

export default App;
