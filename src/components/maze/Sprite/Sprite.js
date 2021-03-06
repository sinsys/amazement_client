// Sprite Component - Character Sprite using gifs
import React, { useContext, useEffect, useState } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';
import { useKeyPress } from 'hooks/Keyboard';

// Files / Images
import './Sprite.scss';
import walkUp from 'assets/images/sprites/sprite_up.gif';
import walkLeft from 'assets/images/sprites/sprite_left.gif';
import walkDown from 'assets/images/sprites/sprite_down.gif';
import walkRight from 'assets/images/sprites/sprite_right.gif';

import standUp from 'assets/images/sprites/sprite_up_still.gif';
import standLeft from 'assets/images/sprites/sprite_left_still.gif';
import standRight from 'assets/images/sprites/sprite_right_still.gif';
import standDown from 'assets/images/sprites/sprite_down_still.gif';

const Sprite = (props) => {

  // Initializes our input context
  const { state } = useContext(MazeContext);

  // Sets up a state for moving.
  const [moving, setMoving] = useState(false);

  // These provide Boolean values for when arrow keys are pressed or not
  const keyboard = {
    inputUp: useKeyPress('ArrowUp'),
    inputRight: useKeyPress('ArrowRight'),
    inputDown: useKeyPress('ArrowDown'),
    inputLeft: useKeyPress('ArrowLeft')
  }

  // Sets a delay to prevent overflow with movements. This is essentially a debouncer/throttler function
  const handleMove = (dir) => {
    setMoving(true);
    setTimeout(() => {
      switch (dir) {
        case 'up':
          setSpriteImg({ img: standUp });
          break;
        case 'right':
          setSpriteImg({ img: standRight });
          break;
        case 'down':
          setSpriteImg({ img: standDown });
          break;
        case 'left':
          setSpriteImg({ img: standLeft });
          break;
        default:
          setSpriteImg({ img: standDown });
          break;
      }
      setMoving(false);
    }, 300);
  };

  const [ spriteImg, setSpriteImg ] = useState({ img: standDown });

  useEffect(() => {

    // Event listeners for keyboard or mouse controls
    if (state.active){
      
      if ( keyboard.inputUp || props.touchDir.up ) {
          if ( !moving ) { 
            setSpriteImg({ img: walkUp })
            handleMove('up');
          }
      } else if ( keyboard.inputRight || props.touchDir.right ) {
          if ( !moving ) { 
            handleMove('right');
            setSpriteImg({ img: walkRight })
          }
      } else if ( keyboard.inputDown || props.touchDir.down ) {
          if ( !moving ) { 
            handleMove('down');
            setSpriteImg({ img: walkDown })
          }
      } else if ( keyboard.inputLeft || props.touchDir.left ) {
          if ( !moving ) { 
            handleMove('left');
            setSpriteImg({ img: walkLeft })
          }
      };
    }
  // eslint-disable-next-line
  }, [state.active, keyboard]);

  return (
    <div className="Sprite_wrapper">
      <img 
        src={spriteImg.img} 
        id="sprite-canvas"
        style={{
          marginBottom: state.scale,
          width: state.scale,
          height: state.scale * 1.5
        }}
        alt="character-sprite"
      />
    </div>
  );

};

export default Sprite;