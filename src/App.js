import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './Pages/Introduction/Introduction';
import Description from './Pages/Description/Description';
import Contacts from './Pages/Contacts/Contacts';
import Menu from './Pages/Menu/Menu';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" component={Introduction} exact/>
        <Route path="/description" component={Description} />
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/contacts" component={Contacts} /> 
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div className="App">
        <Menu />
        {routes}
      </div>
    );
  }
}

export default App;
