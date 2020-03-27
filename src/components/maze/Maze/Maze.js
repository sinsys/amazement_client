// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Utilities / Helpers
import { drawMaze } from 'utils/maze-utility';

// Files
import './Maze.scss';

const Maze = () => {

  // Establish our maze context
  const mazeContext = useContext(MazeContext);

  // Reference to our canvas to draw on
  const mazeCanvasRef = React.useRef(null);

  useEffect(() => {

    // Ensure our maze is created
    if (mazeContext.state.active){

      // Set our reference to the canvas
      const canvas = mazeCanvasRef.current;
      // Setup canvas context
      const ctx = canvas.getContext('2d');
      // Setup individual cell scale
      const scale = mazeContext.state.scale;
      // Set our maze array
      const maze = mazeContext.state.maze;

      drawMaze(maze, scale, ctx, canvas);

    }
  // eslint-disable-next-line
  }, [mazeContext.state.active]);

  return (
    <canvas
      ref={mazeCanvasRef}
      width={mazeContext.state.scale * 15}
      height={mazeContext.state.scale * 15}
      style={{
        left: mazeContext.state.mazePosition[0],
        top: mazeContext.state.mazePosition[1]
      }}
      id="maze-canvas"
    />
  );
};

export default Maze;
