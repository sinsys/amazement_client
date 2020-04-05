// View Component - Options page before starting a maze
import React, { useContext, useEffect, useState } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Files
import './Timer.scss';

const Timer = () => {

  let [timer, setTimer] = useState(["Ready", ""]);

  // Establish our Maze context
  const { state } = useContext(MazeContext);

  useEffect(() => {
    let interval = null;
    if ( state.active && state.timeStart ) {
      
      interval = setInterval(() => {
        let timeElapsed = (new Date().getTime() - state.timeStart) / 1000;
        let formattedTime = timeElapsed
          .toFixed(3)
          .split('.');
        setTimer(formattedTime);
      }, 107);
    }
    return(() => interval);
    // eslint-disable-next-line
  },[state.timeStart]);
  
  return (
    <div className="Timer_wrapper">
      <span className="timer">
        {timer[0]}
        <span className="timer-ms">
          {timer[1] !== ""
            ? "." + timer[1]
            : ""
          }
        </span>
      </span>
    </div>
  );
};

export default Timer;
