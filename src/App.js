// Root App component
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Contexts / Hooks
import { MazeContextProvider } from 'contexts/MazeContext';

// Canvas Components
import Game from 'components/views/Game/Game';

// Files
import './App.scss';

function App() {

  return (
    <div className="App_wrapper">
      <MazeContextProvider>
        <Switch>
          <Route
            exact path={'/'}
            component={Game}
          />
        </Switch>
      </MazeContextProvider>
    </div>
  );
}

export default App;
