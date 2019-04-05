import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './Pages/Introduction/Introduction';
import Menu from './Pages/Menu/Menu';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" component={Introduction} />
        {/* <Route path="/description" component={Description} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} /> */}
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div className="App">
        {routes}
        <Menu />
        <Introduction />
      </div>
    );
  }
}

export default App;
