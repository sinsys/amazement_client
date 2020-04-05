// View Component - Options page before starting a maze
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Files
import './Timer.scss';

const Timer = () => {

  const history = useHistory();
  let [timer, setTimer] = useState("...waiting");

  // Establish our Maze context
  const { state, dispatch } = useContext(MazeContext);

  useEffect(() => {
    let interval = null;
    if ( state.active && state.timeStart ) {
      
      interval = setInterval(() => {
        let timeElapsed = (new Date().getTime() - state.timeStart) / 1000;
        setTimer(timeElapsed.toFixed(3));
      }, 97);
    }
    return(() => interval);
    // eslint-disable-next-line
  },[state.timeStart]);
  
  return (
    <div className="Timer_wrapper">
      <span className="timer">{timer}</span>
    </div>
  );
};

export default Timer;
