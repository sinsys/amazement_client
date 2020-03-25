// Root App component
import React from 'react';

// Utilities / Helpers
import {
  createMazeObj,
  validMove
} from 'utils/maze-utility';

// Files
import './App.css';


function App() {

  const ourMaze = createMazeObj(15,15);
  console.log(ourMaze[1][1]);
  console.log(validMove(ourMaze[1][1], 'up'));
  console.log(validMove(ourMaze[1][1], 'right'));
  console.log(validMove(ourMaze[1][1], 'down'));
  console.log(validMove(ourMaze[1][1], 'left'));
  console.log(ourMaze);
  return (
    <div className="App">
      <h1>aMAZEment</h1>
    </div>
  );
}

export default App;
