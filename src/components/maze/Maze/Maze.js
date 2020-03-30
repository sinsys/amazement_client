// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Utilities / Helpers
import { drawMaze, markPathVisited } from 'utils/maze-utility';

// Files
import './Maze.scss';

const Maze = () => {

  // Establish our maze context
  const { state, dispatch } = useContext(MazeContext);

  // Reference to our canvas to draw on
  const mazeCanvasRef = React.useRef(null);

  useEffect(() => {

    // Ensure our maze is created
    if (state.active){

      // Set our reference to the canvas
      const canvas = mazeCanvasRef.current;
      // Setup canvas context
      const ctx = canvas.getContext('2d');
      // Setup individual cell scale
      const scale = state.scale;
      // Set our maze array
      const maze = state.maze;

      drawMaze(maze, scale, ctx, canvas);
      // markPathVisited(1, 1, maze, scale, ctx, canvas);
      // ctx.globalAlpha = 1;
      // ctx.fillStyle = "#5D98E8"
      // ctx.fillRect(state.scale, state.scale, state.scale, state.scale);

    }
  // eslint-disable-next-line
  }, [state.active]);

  useEffect(() => {

    if ( state.playerPath.length > 1 && !state.timeStart ) {
      dispatch({ type: 'start-timer' });
      
    }
    // Ensure our maze is created
    if (state.active && state.playerPath.length > 0){

      // Set our reference to the canvas
      const canvas = mazeCanvasRef.current;
      // Setup canvas context
      const ctx = canvas.getContext('2d');
      // Setup individual cell scale
      const scale = state.scale;

      let lastVisitedPosition = state.playerPath[state.playerPath.length - 1];

      markPathVisited(lastVisitedPosition[0], lastVisitedPosition[1], scale, ctx);
      
    }
  // eslint-disable-next-line
  }, [state.playerPath]);
  return (
    <canvas
      ref={mazeCanvasRef}
      width={state.scale * state.size}
      height={state.scale * state.size}
      style={{
        left: state.mazePosition[0],
        top: state.mazePosition[1]
      }}
      id="maze-canvas"
    />
  );
};

export default Maze;
