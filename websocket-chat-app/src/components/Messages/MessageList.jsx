import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    console.log('from Message List',this.props);
    return (
      <div className="well">
        <h3>
          {
            this.props.messages.map((message, i) => {
              return <Message message={message} key={i} />
            })
            }
        </h3>
      </div>
    )
  }
}

export default MessageList;
