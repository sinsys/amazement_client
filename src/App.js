// Root App component
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Contexts / Hooks
import { MazeContextProvider } from 'contexts/MazeContext';

// Views
import Home from 'components/views/Home/Home';
import Landing from 'components/views/Landing/Landing.js'
import Options from 'components/views/Options/Options';
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
            component={Landing}
          />
          <Route
            exact path={'/home'}
            component={Home}
          />
          <Route
            exact path={'/options'}
            component={Options}
          />
          <Route
            exact path={'/game'}
            component={Game}
          />
        </Switch>
      </MazeContextProvider>
    </div>
  );
}

export default App;
