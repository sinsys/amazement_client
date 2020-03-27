// Scaffolding Component - Header
import React, { useContext, useEffect, useState } from 'react';

// Animations
// import { motion } from "framer-motion";

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';
// Controls
// import { useKeyPress } from 'hooks/Keyboard';
import { validMove } from 'utils/maze-utility';
// Components 
import Maze from 'components/maze/Maze/Maze';
import Sprite from 'components/maze/Sprite/Sprite';

import { useKeyPress } from 'hooks/Keyboard';

// Files / Images
import './Viewport.scss';

const Viewport = () => {

  // Initializes our input context
  const { state, dispatch } = useContext(MazeContext);

  const [moving, setMoving] = useState(false);

  const inputs = {
    inputUp: useKeyPress('ArrowUp'),
    inputRight: useKeyPress('ArrowRight'),
    inputDown: useKeyPress('ArrowDown'),
    inputLeft: useKeyPress('ArrowLeft')
  }

  const handleMove = () => {
    setMoving(true);
    setTimeout(() => {
      setMoving(false);
    }, 300);
  };

  useEffect(() => {

  if ( state.active ) {
    let cell = state.maze[ state.playerPosition[0] ][ state.playerPosition[1] ];

    if ( inputs.inputUp ) {
      if ( validMove(cell, 'up') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-up' });
        }
      };
    };
    if ( inputs.inputRight ) {
      if ( validMove(cell, 'right') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-right' });
        }
      };
    };
    if ( inputs.inputDown ) {
      if ( validMove(cell, 'down') ) {
        if ( !moving ) { 
          handleMove();
          dispatch({ type: 'move-down' });
        }
      };
    };
    if ( inputs.inputLeft ) {
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
      <Maze />
      <Sprite />
    </section>

  );

};

export default Viewport;