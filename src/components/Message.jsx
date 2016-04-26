import React, { Component } from 'react';
import { ListItem, Avatar } from 'material-ui';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const avatarUrl = 'https://pbs.twimg.com/profile_images/661720275155730432/4K6FzYlG.png'
    return (
      <ListItem
        leftAvatar={<Avatar src={avatarUrl}/>} >
        {this.props.message}
      </ListItem>
    );
  }
}

export default Message;
