import React from 'react'
import Main from './component/Main.js'
import Game from './component/Game.js'
function App() {
  const [start, setStart] = React.useState(false)

  return (
    <div className="App">
      {!start && <Main setStart={setStart}/>}
      {start && <Game setStart={setStart}/>}
    </div>
  );
}

export default App;
