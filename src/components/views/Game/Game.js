// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Components 
import Viewport from 'components/maze/Viewport/Viewport';

// Files
import '../views.scss';
import './Game.scss';


const Game = () => {

  const history = useHistory();

  // Establish our Maze context
  let { state } = useContext(MazeContext);

  useEffect(() => {
    if ( !state.active ) {
      history.push('/options');
    }
  }, [state.active]);
  
  return (
    <div className="Main Game_wrapper">
      <Viewport />
    </div>
  );
};

export default Game;
