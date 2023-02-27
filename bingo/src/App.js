import React from 'react'
import Main from './component/Main.js'
import Game from './component/Game.js'
function App() {
  const [start, setStart] = React.useState(false)

  function startGame() {
    setStart(true)
  }

  return (
    <div className="App">
      {!start && <Main startGame={startGame}/>}
      {start && <Game/>}
    </div>
  );
}

export default App;
