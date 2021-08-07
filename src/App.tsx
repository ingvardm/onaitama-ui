import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GameScene from './Scenes/Game';
import MainMenuScene from './Scenes/MainMenu';

function App() {
  return <div id='app'>
    <Router>
        <Switch>
          <Route path="/" component={MainMenuScene} exact />
          <Route path="/game" component={GameScene} exact />
        </Switch>
    </Router>
  </div>
}

export default App;
