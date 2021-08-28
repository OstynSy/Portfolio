import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
