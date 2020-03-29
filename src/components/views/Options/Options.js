// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Components 
import Button from 'components/elements/Button/Button';

// Helpers / Utilities
import uuid from 'react-uuid'

// Files
import '../views.scss';
import './Options.scss';

const Options = () => {

  const history = useHistory();

  // Establish our Maze context
  const mazeContext = useContext(MazeContext);

  // // Setup a new maze
  // const createMaze = (options) => {
  //   mazeContext.dispatch({
  //     type: 'create-maze',
  //     payload: {
  //       active: true,
  //       scale: options.scale,
  //       size: options.size,
  //       mazePosition: [options.mazePosition[0], options.mazePosition[1]],
  //       difficulty: options.difficulty
  //     }
  //   });
  // };

  // useEffect(() => {
  //   // Set up a new maze if current game is not active
  //   if (!mazeContext.state.active){
  //     let size = mazeContext.state.size;
  //     // Set scale of each cell
  //     let scale = window.innerWidth - window.innerHeight > 0
  //       ? window.innerHeight / size 
  //       : window.innerWidth / size;
        
  //     const options = {
  //       scale: scale,
  //       size: size,
  //       difficulty: "Easy",
  //       // This is for responsive reasons. Will scale to the screen size and place the map on coordinates row:0 column:0 visually
  //       // This moves the map to line up with the centered Sprite / Character
  //       mazePosition: [((scale * size) / 2 - (scale / 2)), ((scale * size) / 2 - (scale / 2))]
  //     };
  //     createMaze(options);
  //   }
  // // eslint-disable-next-line
  // }, [mazeContext.state.active]);

  // Setup a new maze
  const createMaze = (size) => {

    let scale = window.innerWidth - window.innerHeight > 0
      ? window.innerHeight / 15 
      : window.innerWidth / 15;

    let mazePosition = [((scale * 15) / 2 - (scale / 2)), ((scale * 15) / 2 - (scale / 2))];

    mazeContext.dispatch({
      type: 'create-maze',
      payload: {
        active: true,
        scale: scale,
        size: size,
        mazePosition: mazePosition,
        difficulty: "",
        maze_id: uuid()
      }
    });

  };

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
