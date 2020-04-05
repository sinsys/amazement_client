// Root App component
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Contexts / Hooks
import { MazeContextProvider } from 'contexts/MazeContext';

// Views
import Home from 'components/views/Home/Home';
import Landing from 'components/views/Landing/Landing.js'
import Options from 'components/views/Options/Options';
import Game from 'components/views/Game/Game';
import Results from 'components/views/Results/Results';

// Files
import './App.scss';

const App = () => {
  const hideAddressBar = () => {
    if( !window.location.hash ) {
      if( document.height < window.outerHeight ) {
        document.body.style.height = (window.outerHeight) + 'px';
      }
      setTimeout( function(){ window.scrollTo(0, 1); });
    }
  }
  useEffect(() => {
    window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
    window.addEventListener("orientationchange", hideAddressBar );
    hideAddressBar();
    return(() => hideAddressBar);
  }, []);

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
          <Route
            exact path={'/results'}
            component={Results}
          />
        </Switch>
      </MazeContextProvider>
    </div>
  );
}

export default App;
