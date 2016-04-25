import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'foo how are you?',
        'I am fine how are you?'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>
          {message}
        </div>
      );
    });

    return (
      <div style={{color: 'green'}}>
        {messageNodes}
      </div>
    );
  }
}

export default App;
