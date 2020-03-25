// Root App component
import React from 'react';

// Contexts / Hooks
import { MazeContextProvider } from 'contexts/MazeContext';

// Canvas Components
import Maze from 'components/canvas/Maze/Maze';

// Files
import './App.scss';


function App() {

  return (
    <MazeContextProvider>
      <div className="App_wrapper">
        <Maze />
      </div>
    </MazeContextProvider>
  );
}

export default App;
