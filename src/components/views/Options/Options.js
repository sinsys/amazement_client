// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Components 
import Button from 'components/elements/Button/Button';

// Helpers / Utilities
import { v4 as uuidv4 } from 'uuid';

// Files
import '../views.scss';
import './Options.scss';

const Options = () => {

  const history = useHistory();

  // Establish our Maze context
  const { state, dispatch } = useContext(MazeContext);

  // Setup a new maze
  const createMaze = (size) => {

    let scale = window.innerWidth - window.innerHeight > 0
      ? window.innerHeight / 15 
      : window.innerWidth / 15;

    let mazePosition = [((scale * 15) / 2 - (scale / 2)), ((scale * 15) / 2 - (scale / 2))];
    dispatch({
      type: 'create-maze',
      payload: {
        active: true,
        scale: scale,
        size: size,
        mazePosition: mazePosition,
        difficulty: "",
        uuid: uuidv4()
      }
    });

  };

  useEffect(() => {

    if ( state.timeStart && state.timeEnd ) {
      alert( `You won in ${(state.timeEnd.getTime() - state.timeStart.getTime()) / 1000} seconds.`);
      dispatch({ type: 'reset-game' });
    }    
  
    // eslint-disable-next-line
    },[]);
  return (
    <div className="Main Options_wrapper">

      <h2 className="options-header">Options</h2>

      <div className="btn-options-row">
        <Button
          id="easy-btn"
          className="easy-btn draw-border-easy btn"
          type="button"
          name="easy-btn"
          text="Easy"
          onClick={() => {
            // history.push('/options')
            createMaze(15);
            history.push('/game');
          }}
        />
        <Button
          id="medium-btn"
          className="medium-btn draw-border-medium btn"
          type="button"
          name="medium-btn"
          text="Medium"
          onClick={() => {
            createMaze(20);
            history.push('/game');
          }}
        />    
        <Button
          id="hard-btn"
          className="hard-btn draw-border-hard btn"
          type="button"
          name="hard-btn"
          text="Hard"
          onClick={() => {
            createMaze(25);
            history.push('/game');
          }}
        />
      </div>

    </div>
  );
};

export default Options;
