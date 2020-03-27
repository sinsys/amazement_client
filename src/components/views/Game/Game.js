// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Components 
import Viewport from 'components/maze/Viewport/Viewport';

// Files
import '../views.scss';
import './Game.scss';

const Game = () => {

  // Establish our Maze context
  const mazeContext = useContext(MazeContext);

  // Setup a new maze
  const createMaze = (options) => {
    mazeContext.dispatch({
      type: 'create-maze',
      payload: {
        active: true,
        scale: options.scale,
        size: options.size,
        mazePosition: [options.mazePosition[0], options.mazePosition[1]],
        difficulty: options.difficulty
      }
    });
  };

  useEffect(() => {
    // Set up a new maze if current game is not active
    if (!mazeContext.state.active){
      let size = mazeContext.state.size;
      // Set scale of each cell
      let scale = window.innerWidth - window.innerHeight > 0
        ? window.innerHeight / size 
        : window.innerWidth / size;
        
      const options = {
        scale: scale,
        size: size,
        difficulty: "Easy",
        // This is for responsive reasons. Will scale to the screen size and place the map on coordinates row:0 column:0 visually
        // This moves the map to line up with the centered Sprite / Character
        mazePosition: [((scale * size) / 2 - (scale / 2)), ((scale * size) / 2 - (scale / 2))]
      };
      createMaze(options)
    }
  // eslint-disable-next-line
  }, [mazeContext.state.active]);

  return (
    <div className="Main Game_wrapper">
      <Viewport />
    </div>
  );
};

export default Game;
