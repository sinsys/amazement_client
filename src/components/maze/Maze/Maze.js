// Canvas Component - Maze Canvas
import React, { useContext, useEffect } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Files
import './Maze.scss';

const Maze = () => {

  const mazeContext = useContext(MazeContext);

  const mazeCanvasRef = React.useRef(null);

  useEffect(() => {

    if (mazeContext.state.active){

      const canvas = mazeCanvasRef.current;
      
      const ctx = canvas.getContext('2d');
      const scale = mazeContext.state.scale;
      const maze = mazeContext.state.maze;

      ctx.fillStyle = "#CCC";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 6;

      maze.forEach((row, y) => {
        row.forEach((cell, x) => {
          cell.forEach((edge, e) => {
            ctx.beginPath();
            if ( !edge ){
              switch (e) {
                case 0:
                  ctx.moveTo(x * scale - 2.5, y * scale);
                  ctx.lineTo(x * scale + scale + 2.5, y * scale);
                  ctx.stroke();
                break;
                case 1:
                  ctx.moveTo(x * scale + scale, y * scale - 2.5);
                  ctx.lineTo(x * scale + scale, y * scale + scale + 2.5);
                  ctx.stroke();
                break;
                case 2:
                  ctx.moveTo(x * scale - 2.5, y * scale + scale);
                  ctx.lineTo(x * scale + scale + 2.5, y * scale + scale);
                  ctx.stroke();
                break;
                case 3:
                  ctx.moveTo(x * scale, y * scale - 2.5);
                  ctx.lineTo(x * scale, y * scale + scale + 2.5);
                  ctx.stroke();
                break;
                default: return;
              }
            }
          });
        });
      });

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
