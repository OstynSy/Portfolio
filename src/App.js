import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <div>
      <nav class="nav-bar">
        <div>Ostyn Sy</div>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div class="footer">
        <p>footer</p>
      </div>
    </div>

  );
}

export default App;
