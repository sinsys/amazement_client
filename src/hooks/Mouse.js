// This method was pushed aside in favor of event listeners on the UI arrows
// Leaving this in the codebase in case we refactor all inputs to a single hook management
import { useState, useEffect } from 'react';

function useTouchPress(dir) {
  // State for keeping track of whether touch is pressed
  const [dirPressed, setDirPressed] = useState({});
  // const [rightPressed, setRightPressed] = useState(false);
  // const [downPressed, setDownPressed] = useState(false);
  // const [leftPressed, setLeftPressed] = useState(false);

  // If pressed key is our target key then set to true
  const touchPressHandler = (dir) => {
    switch(dir) {
      case 'up':
        setDirPressed({ up: true });
        break;
      case 'right':
        setDirPressed({ right: true });
        break;
      case 'down':
        setDirPressed({ down: true });
        break;
      case 'left':
        setDirPressed({ left: true });
        break;
      default:
        setDirPressed({});
    }
  }

  // If released key is our target key then set to false
  const touchReleaseHandler = () => {
    setDirPressed(false);
  };

  return dirPressed;
}

export {
  useTouchPress
}