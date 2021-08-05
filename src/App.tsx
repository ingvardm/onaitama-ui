import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GameScene from './Scenes/Game';
import MainMenuScene from './Scenes/MainMenu';

function App() {
  return <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main Menu</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/game">
            <GameScene />
          </Route>
          <Route path="/">
            <MainMenuScene />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
}

export default App;
