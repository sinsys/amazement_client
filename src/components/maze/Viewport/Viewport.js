// Scaffolding Component - Header
import React, { useContext, useEffect, useState } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';
import { useKeyPress } from 'hooks/Keyboard';

// Utilities / Helpers
import { validMove, markPathVisited } from 'utils/maze-utility';

// Components 
import Maze from 'components/maze/Maze/Maze';
import Sprite from 'components/maze/Sprite/Sprite';

// Files / Images
import './Viewport.scss';

const Viewport = () => {

  // Initializes our input context
  const { state, dispatch } = useContext(MazeContext);

  // Initializes touch state
  const [ touch, setTouch ] = useState(
    {
      up: false,
      right: false,
      down: false,
      left: false
    }
  );

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

    // Need to implement further. Basic test to display when player wins
    if ( state.won ) {
      setTimeout(() => alert('YOU WIN!'), 300);
    };

    // Get our active cell (we will need this for collision detection)
    let cell = state.maze[ state.playerPosition[0] ][ state.playerPosition[1] ];
    
    // Handle inputs from the user
    /* Check goes as follows:
     - If the keyboard key is pressed
     - If it is a valid move (not out of bounds or colliding with a wall)
     - Make sure we aren't moving - movement dispatches overflow without debounce */

    if ( inputs.inputUp || touch.up ) {
      if ( validMove(cell, 'up') ) {
        if ( !moving ) { 
          dispatch({ type: 'move-up' });
          handleMove();
        }
      };
    } else if ( inputs.inputRight || touch.right ) {
      if ( validMove(cell, 'right') ) {
        if ( !moving ) { 
          dispatch({ type: 'move-right' });
          handleMove();
        }
      };
    } else if ( inputs.inputDown || touch.down ) {
      if ( validMove(cell, 'down') ) {
        if ( !moving ) { 
          dispatch({ type: 'move-down' });
          handleMove();
        }
      };
    } else if ( inputs.inputLeft || touch.left ) {
      if ( validMove(cell, 'left') ) {
        if ( !moving ) { 
          dispatch({ type: 'move-left' });
          handleMove();
        }
      };
    };

  }

  // eslint-disable-next-line
  },[state.playerPosition, inputs, touch]);

  return (

    <section className="Viewport_wrapper">
      {/* Need to put the mobile controls into a component and clean up the DRY touch mangement */}
      <div 
        className="mobile-controls-up" 
        onTouchStart={(e)=> setTouch({ up: true, right: false, down: false, left: false })}
        onTouchEnd={(e) => setTouch({ up: false, right: false, down: false, left: false })}
      />
      <div 
        className="mobile-controls-right"
        onTouchStart={(e)=> setTouch({ up: false, right: true, down: false, left: false })}
        onTouchEnd={(e) => setTouch({ up: false, right: false, down: false, left: false })}
      />
      <div 
        className="mobile-controls-down"
        onTouchStart={(e)=> setTouch({ up: false, right: false, down: true, left: false })}
        onTouchEnd={(e) => setTouch({ up: false, right: false, down: false, left: false })}
      />
      <div className="mobile-controls-left"
        onTouchStart={(e)=> setTouch({ up: false, right: false, down: false, left: true })}
        onTouchEnd={(e) => setTouch({ up: false, right: false, down: false, left: false })} 
      />
      <Maze />
      <Sprite />
    </section>

  );

};

export default Viewport;