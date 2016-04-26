import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'bar how are you?',
        'I am fine how are you?'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>
          <Message message={message}/>
        </div>
      );
    });

    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList;
