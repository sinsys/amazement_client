// View Component - Options page before starting a maze
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Services
import GamesApiService from 'services/GameService';

// Components 
import Button from 'components/elements/Button/Button';

// Helpers / Utilities
import { v4 as uuidv4 } from 'uuid';
import { formatHighScores } from 'utils/scores-utility';

// Files
import '../views.scss';
import './Options.scss';

const Options = () => {

  const history = useHistory();

  // Establish our Maze context
  const { state, dispatch } = useContext(MazeContext);

  // Store our selected option
  const [option, setOption] = useState({ option: '' })

  // Setup a new maze
  const createMaze = (difficulty) => {

    let mazeSize;
    switch (difficulty) {
      case "easy":
        mazeSize = 15;
        break;
      case "medium":
        mazeSize = 20;
        break;
      case "hard":
        mazeSize = 25;
        break;
      default: return;
    };

    // Define the current viewport scale to be used
    let scale = window.innerWidth - window.innerHeight > 0
      ? window.innerHeight / 15 
      : window.innerWidth / 15;

    // Get pixel values of where maze should be placed. It centers the top left tile on the character sprite
    let mazePosition = [((scale * 15) / 2 - (scale / 2)), ((scale * 15) / 2 - (scale / 2))];

    dispatch({
      type: 'create-maze',
      payload: {
        active: true,
        scale: scale,
        size: mazeSize,
        mazePosition: mazePosition,
        difficulty: difficulty,
        uuid: uuidv4()
      }
    });

  };

  // High Score utilities
  let [ scores, setScores ] = useState([]);

  const renderScores = (scores) => {
    return scores.map(score => {
      return (
        <tr className="score" key={`${score.user_name}-${score.time_taken}`}>
          <td className="score-time-taken">{score.time_taken} sec</td>
          <td className="score-user-name">{score.user_name}</td>
          <td className="score-difficulty">{score.difficulty}</td>
        </tr>
      );
    });
  };

  // Switches game mode
  const handleOption = (option) => {
    setOption({ option: option });
  };

  useEffect(() => {

    // Get new high scores if not fetched
    if ( !state.highScores.fetched ) {
      GamesApiService.getGames()
        .then(res => {
          dispatch({
            type: 'set-high-scores',
            payload: { highScores: formatHighScores(res) }
          })
        });
    } else {
      if ( option.option === '' ) {
        setScores(state.highScores.highScores.top);
      } else {
        setScores(state.highScores.highScores[option.option]);
      }
      
    }
    // eslint-disable-next-line
  },[state.highScores.fetched, option]);
  
  return (
    <div className="Main Options_wrapper">

      <h2 className="options-header">High Scores</h2>
      <table className="scores">
        <thead>
          <tr>
            <th>Time</th>
            <th>Username</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {state.highScores.fetched
            ? renderScores(scores)
            : <tr className="score">
                <td colSpan="3">
                  ... Fetching high scores ...
                </td>
              </tr>
          }
        </tbody>
      </table>

      <h2 className="options-header">Options</h2>
      <div className="btn-options-row">
        <Button
          id="easy-btn"
          className={`
            easy-btn draw-border-easy btn
            ${option.option === 'easy' ? 'active' : ''}
          `}
          type="button"
          name="easy-btn"
          text="Easy"
          onClick={() => {
            handleOption('easy');
          }}
        />
        <Button
          id="medium-btn"
          className={`
            medium-btn draw-border-medium btn
            ${option.option === 'medium' ? 'active' : ''}
          `}
          type="button"
          name="medium-btn"
          text="Medium"
          onClick={() => {
            handleOption('medium');
          }}
        />    
        <Button
          id="hard-btn"
          className={`
            hard-btn draw-border-hard btn
            ${option.option === 'hard' ? 'active' : ''}
          `}
          type="button"
          name="hard-btn"
          text="Hard"
          onClick={() => {
            handleOption('hard');
          }}
        />
        <Button
          id="start-game-btn"
          className={`
            start-game-btn 
            draw-border-start-game 
            btn 
            ${option.option === '' ? 'disabled' : ''}
          `}
          type="button"
          name="hard-btn"
          text="Start Game"
          disabled={option.option === ''}
          onClick={() => {
            createMaze(option.option);
            history.push('/game');
          }}
        />
      </div>

    </div>
  );
};

export default Options;
