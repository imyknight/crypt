import React from 'react';
import '../styles/App.scss';
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import Home from './Home'

function App() {
  return (
    <div>
      <div className="bg">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={Login} />
        </Switch>
      </div>
    </div>

  );
}
export default App;
