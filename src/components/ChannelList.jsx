import React, { Component } from 'react';
import Channel from './Channel.jsx';
import mui, { Card, List } from 'material-ui';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    };
  }

  render() {
    var channelNodes = this.state.channels.map((channel) => {
      return (
        <div>
          <Channel channel={channel}/>
        </div>
      );
    });

    return (
      <Card style={{
        flexGrow: 1
      }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
