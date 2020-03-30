// Canvas Component - Maze Canvas
import React from 'react';

// Contexts / Hooks


// Components 
import Viewport from 'components/maze/Viewport/Viewport';

// Files
import '../views.scss';
import './Game.scss';

const Game = () => {

  // Establish our Maze context

  return (
    <div className="Main Game_wrapper">
      <Viewport />
    </div>
  );
};

export default Game;
