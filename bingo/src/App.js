import React from 'react'
import Main from './component/Main.js'
import Game from './component/Game.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
