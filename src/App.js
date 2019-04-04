import React, { Component } from 'react';

import Introduction from './Pages/Introduction/Introduction';
import Menu from './Pages/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Introduction />
      </div>
    );
  }
}

export default App;
