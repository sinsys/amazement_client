// View Component - Results page after completing a maze
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';
import { useInputChange } from 'hooks/useInputChange';

// Services
import GamesApiService from 'services/GameService';

// Utilities / Helpers
import { drawResultsMaze } from 'utils/maze-utility';

// Components 
import Button from 'components/elements/Button/Button';
import ErrorMsg from 'components/elements/ErrorMsg/ErrorMsg';

// Files
import '../views.scss';
import './Results.scss';

const Results = () => {

  const history = useHistory();

  // Establish our Maze context
  const { state, dispatch } = useContext(MazeContext);

  // Temporarily using a static completed maze state for development
  // const results = {
  //   "scale":27.6,"size":15,"active":false,"maze":[[[0,1,1,0],[0,0,0,1],[0,1,1,0],[0,0,1,1],[0,1,1,0],[0,1,0,1],[0,0,1,1],[0,1,1,0],[0,1,0,1],[0,1,0,1],[0,1,0,1],[0,1,0,1],[0,1,1,1],[0,1,0,1],[0,0,1,1]],[[1,1,1,0],[0,0,1,1],[1,0,0,0],[1,0,1,0],[1,1,0,0],[0,0,1,1],[1,1,0,0],[1,0,0,1],[0,1,0,0],[0,1,0,1],[0,1,1,1],[0,0,0,1],[1,1,0,0],[0,0,1,1],[1,0,1,0]],[[1,0,1,0],[1,0,1,0],[0,1,1,0],[1,0,0,1],[0,1,1,0],[1,0,0,1],[0,1,0,0],[0,1,0,1],[0,1,1,1],[0,1,0,1],[1,0,1,1],[0,1,1,0],[0,1,0,1],[1,0,0,1],[1,0,0,0]],[[1,0,1,0],[1,0,1,0],[1,1,0,0],[0,0,1,1],[1,0,1,0],[0,1,1,0],[0,1,0,1],[0,0,1,1],[1,0,1,0],[0,1,0,0],[1,0,0,1],[1,0,1,0],[0,1,1,0],[0,1,0,1],[0,0,1,1]],[[1,0,1,0],[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,1,0,0],[1,0,0,1],[0,0,1,0],[1,0,1,0],[1,0,1,0],[0,1,1,0],[0,1,1,1],[1,0,0,1],[1,1,0,0],[0,0,1,1],[1,0,1,0]],[[1,0,1,0],[0,1,1,0],[0,1,0,1],[0,1,0,1],[0,0,1,1],[0,1,1,0],[1,0,0,1],[1,0,1,0],[1,0,1,0],[1,0,1,0],[1,0,0,0],[0,1,1,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],[[1,0,1,0],[1,1,0,0],[0,0,1,1],[0,0,1,0],[1,0,1,0],[1,1,0,0],[0,1,0,1],[1,1,0,1],[1,0,1,1],[1,1,0,0],[0,1,0,1],[1,1,0,1],[0,0,0,1],[0,1,1,0],[1,0,1,1]],[[1,1,0,0],[0,0,1,1],[1,0,1,0],[1,0,1,0],[1,1,0,0],[0,1,0,1],[0,0,1,1],[0,1,0,0],[1,0,1,1],[0,1,1,0],[0,0,1,1],[0,1,1,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],[[0,1,1,0],[1,0,0,1],[1,0,1,0],[1,1,1,0],[0,1,0,1],[0,0,1,1],[1,1,0,0],[0,0,1,1],[1,0,1,0],[1,0,1,0],[1,1,0,0],[1,0,0,1],[0,1,0,0],[0,0,1,1],[1,0,1,0]],[[1,1,0,0],[0,0,1,1],[1,0,1,0],[1,1,0,0],[0,0,1,1],[1,1,1,0],[0,0,0,1],[1,0,1,0],[1,0,0,0],[1,1,0,0],[0,1,0,1],[0,1,0,1],[0,0,1,1],[1,0,1,0],[1,0,1,0]],[[0,0,1,0],[1,1,0,0],[1,0,0,1],[0,1,1,0],[1,0,0,1],[1,1,0,0],[0,1,0,1],[1,0,0,1],[0,1,1,0],[0,0,1,1],[0,1,1,0],[0,1,0,1],[1,0,0,1],[1,1,1,0],[1,0,0,1]],[[1,1,1,0],[0,1,0,1],[0,1,0,1],[1,0,0,1],[0,1,1,0],[0,1,0,1],[0,0,1,1],[0,1,0,0],[1,0,1,1],[1,1,0,0],[1,0,0,1],[0,1,1,0],[0,0,1,1],[1,1,0,0],[0,0,1,1]],[[1,0,1,0],[0,1,1,0],[0,1,0,1],[0,0,1,1],[1,1,1,0],[0,0,1,1],[1,1,0,0],[0,1,0,1],[1,0,0,1],[0,0,1,0],[0,1,1,0],[1,0,0,1],[1,1,0,0],[0,0,1,1],[1,0,1,0]],[[1,1,0,0],[1,0,0,1],[0,0,1,0],[1,0,1,0],[1,0,0,0],[1,1,0,0],[0,0,1,1],[0,1,1,0],[0,1,1,1],[1,0,0,1],[1,0,1,0],[0,0,1,0],[0,1,1,0],[1,0,0,1],[1,0,1,0]],[[0,1,0,0],[0,1,0,1],[1,1,0,1],[1,1,0,1],[0,1,0,1],[0,1,0,1],[1,0,0,1],[1,0,0,0],[1,1,0,0],[0,1,0,1],[1,1,0,1],[1,0,0,1],[1,1,0,0],[0,1,0,1],[1,0,0,1]]],"playerPosition":[14,14],"mazePosition":[-193.2,-193.2],"winCoords":[14,14],"difficulty":"easy","spritePosition":[179.39999999999998,179.39999999999998],"activeCell":[],"won":true,"playerPath":[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[7,1],[8,1],[8,0],[9,0],[9,1],[10,1],[10,2],[9,2],[8,2],[7,2],[6,2],[6,1],[5,1],[5,2],[5,3],[5,4],[6,4],[7,4],[7,5],[7,6],[8,6],[8,7],[9,7],[10,7],[10,6],[10,5],[9,5],[8,5],[8,4],[8,3],[9,3],[9,4],[10,4],[10,3],[11,3],[11,2],[11,1],[11,0],[12,0],[13,0],[13,1],[12,1],[12,2],[12,3],[13,3],[14,3],[14,4],[14,5],[14,6],[13,6],[13,5],[12,5],[12,4],[11,4],[11,5],[11,6],[12,6],[12,7],[12,8],[11,8],[10,8],[10,9],[11,9],[11,10],[10,10],[10,11],[10,12],[9,12],[9,11],[9,10],[9,9],[8,9],[7,9],[7,10],[8,10],[8,11],[7,11],[7,12],[7,13],[6,13],[6,14],[7,14],[8,14],[9,14],[10,14],[10,13],[11,13],[11,14],[12,14],[13,14]],"uuid":"e5b03695-958b-47d5-9ed3-b9c900d9fb94","timeStart":"2020-04-02T20:12:23.695Z","timeEnd":"2020-04-02T20:12:53.706Z"
  // };

  const results = state;

  // Initializes our input context
  const [input, handleInputChange] = useInputChange();

  // Setup a state for errors
  const [errors, setErrors] = useState({});

  // Reference to our canvas to draw on
  const resultsCanvasRef = React.useRef(null);

  const scale = window.innerWidth - window.innerHeight > 0
    ? window.innerHeight / state.size / 2
    : window.innerWidth / state.size / 2;

  // Validates the form to ensure it includes a user name
  const validateSubmitForm = (e) => {

    e.preventDefault();
    let errors = {};

    if ( input["user_name"] === undefined || input["user_name"] === '' ) {
      errors.user_name = { message: "A name is required" }
    }

    if ( Object.keys(errors).length !== 0 ) {
      return (
        setErrors(errors)
      );
    } else {
      submitScore(input["user_name"]);
    }
  };

  const submitScore = (playerName) => {

    const newGame = {
      uuid: results.uuid,
      size: results.size,
      maze: JSON.stringify(results.maze),
      player_path: JSON.stringify(results.playerPath),
      time_started: results.timeStart,
      time_ended: results.timeEnd,
      user_id: null,
      user_name: playerName,
      difficulty: results.difficulty
    }

    GamesApiService.addGame(newGame)
      .then(res => {
        alert( `Added your run to our database!`);
        dispatch({
          type: ""
        })
        history.push('/options');
      })
      .catch(res => {
        if ( res.error === "Game already exists" ) {
          setErrors( { user_name: { message: "Already submitted" } } );
        }
      });
  };

  useEffect(() => {

    if ( results.uuid ) {
      // Set our reference to the canvas
      const canvas = resultsCanvasRef.current;
      // Setup canvas context
      const ctx = canvas.getContext('2d');
      drawResultsMaze(results.maze, scale, canvas, ctx, results.playerPath, 6);
    } else {
      history.push('/options');
    }

  // eslint-disable-next-line
  },[]);
  
  return (
    <div className="Main Results_wrapper">

      <h2 className="results-header">Your Results</h2>
      <div className="results-details">
        <p>Difficulty: {results.difficulty}</p>
        <p>Time: {(new Date(results.timeEnd).getTime() - new Date(results.timeStart).getTime()) / 1000} seconds</p>
        <form id="submit-run-form" onSubmit={(e) => validateSubmitForm(e)}>
          <h2>Submit your run</h2>
          <label htmlFor="user_name">
            Name:
            { errors.user_name 
              ? <ErrorMsg 
                  message={errors.user_name.message} 
                />
              : ""
            }
          </label>
          <input 
            type="text"
            id="user_name"
            name="user_name"
            onChange={handleInputChange}
          />
          <Button
            id="submit-run-btn"
            className="easy-btn draw-border-easy btn"
            type="submit"
            name="submit-run"
            text="Submit"
          />
        </form>
        <canvas
          ref={resultsCanvasRef}
          width={scale * results.size || 0}
          height={scale * results.size || 0}
          id="results-canvas"
        />
      </div>
    </div>
  );
};

export default Results;
