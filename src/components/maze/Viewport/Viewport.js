// Scaffolding Component - Header
import React, { useContext, useEffect, useState } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';
import { useKeyPress } from 'hooks/Keyboard';

// Utilities / Helpers
import { validMove } from 'utils/maze-utility';

// Components 
import Maze from 'components/maze/Maze/Maze';
import Sprite from 'components/maze/Sprite/Sprite';

// Files / Images
import './Viewport.scss';

const Viewport = () => {

  // Initializes our input context
  const { state, dispatch } = useContext(MazeContext);

  // Sets up a state for moving.
  const [moving, setMoving] = useState(false);

  // These provide Boolean values for when arrow keys are pressed or not
  const inputs = {
    inputUp: useKeyPress('ArrowUp'),
    inputRight: useKeyPress('ArrowRight'),
    inputDown: useKeyPress('ArrowDown'),
    inputLeft: useKeyPress('ArrowLeft')
  }

  // Sets a delay to prevent overflow with movements. This is essentially a debouncer/throttler function
  const handleMove = () => {
    setMoving(true);
    setTimeout(() => {
      setMoving(false);
    }, 300);
  };

  useEffect(() => {

  // Ensure a maze is created
  if ( state.active ) {
    // Get our active cell (we will need this for collision detection)
    let cell = state.maze[ state.playerPosition[0] ][ state.playerPosition[1] ];
    
    // Handle inputs from the user
    /* Check goes as follows:
     - If the keyboard key is pressed
     - If it is a valid move (not out of bounds or colliding with a wall)
     - If we aren't already moving */
    if ( inputs.inputUp ) {
      if ( validMove(cell, 'up') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-up' });
        }
      };
    } else if ( inputs.inputRight ) {
      if ( validMove(cell, 'right') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-right' });
        }
      };
    } else if ( inputs.inputDown ) {
      if ( validMove(cell, 'down') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-down' });
        }
      };
    } else if ( inputs.inputLeft ) {
      if ( validMove(cell, 'left') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-left' });
        }
      };
    };

  }

  // eslint-disable-next-line
  },[state.playerPosition, inputs]);

  return (

    <section className="Viewport_wrapper">
      <div className="mobile-controls"> {/* Need to implement */}
        <Maze />
        <Sprite />
      </div>
    </section>

  );

};

export default Viewport;