import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import Home from './Home'

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={Login} />
        </Switch>
      </div>
    </div>

  );
}
export default App;
