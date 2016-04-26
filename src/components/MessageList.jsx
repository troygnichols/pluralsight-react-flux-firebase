import React, { Component } from 'react';
import Message from './Message.jsx';
import mui, { Card, List } from 'material-ui';

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
      <Card>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
