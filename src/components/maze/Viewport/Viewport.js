// Scaffolding Component - Header
import React, { useContext, useEffect } from 'react';

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

// Files / Images
import './Viewport.scss';

const Viewport = () => {

  // Initializes our input context
  // const [pressed, handleKeyPress] = useKeyPress();
  const { state, dispatch } = useContext(MazeContext);

  useEffect(() => {
    
    document.addEventListener("keydown", e => {
      // handleKeyPress(e);
      const validKeys = [37,38,39,40];
      if ( state.active ) {
        if ( validKeys.includes(e.keyCode) ) {
          let cell = state.maze[ state.playerPosition[0] ][ state.playerPosition[1] ];
          console.log('firing');
          switch (e.keyCode) {
            case 37:
              if ( validMove(cell, 'left') ) {
                dispatch({ type: 'move-left' });
              }
              break;
            case 38:
              if ( validMove(cell, 'up') ) {
                dispatch({ type: 'move-up' });
              };
              break;
            case 39:
              if ( validMove(cell, 'right') ) {
                dispatch({ type: 'move-right' });
              };
              break;
            case 40:
              if ( validMove(cell, 'down') ) {
                dispatch({ type: 'move-down' });
              }
              break;
            default:
              return;
          };
        }
      }
    });
  // eslint-disable-next-line
  },[state.active]);

  return (

    <section className="Viewport_wrapper">
      <Maze />
      <Sprite />
    </section>

  );

};

export default Viewport;