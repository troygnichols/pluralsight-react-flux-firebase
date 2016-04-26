import React, { Component, PropTypes } from 'react';
import MessageList from './MessageList.jsx';
import mui, { AppBar } from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;

class App extends Component {
  constructor() {
    super();
    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    return (
      <div>
        <AppBar title="Awesome Chat App"/>
        <MessageList/>
      </div>
    );
  }
}

export default App;
