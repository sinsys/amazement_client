// Scaffolding Component - Header
import React, { useContext, useEffect } from 'react';

// Contexts / Hooks
import { MazeContext } from 'contexts/MazeContext';

// Files / Images
import './Sprite.scss';
import walkDown from 'assets/images/sprites/sprite_down.gif';

const Sprite = () => {

  const mazeContext = useContext(MazeContext);
  const spriteCanvasRef = React.useRef(null);
  useEffect(() => {

    if (mazeContext.state.active){

      const canvas = spriteCanvasRef.current;
      
      const ctx = canvas.getContext('2d');
      const scale = mazeContext.state.scale;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = scale / 3;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
    }
  // eslint-disable-next-line
  }, [mazeContext.state.active]);

  return (

    // <img 
    //   src={walkDown} 
    //   id="sprite-canvas"
    //   style={{
    //     left: mazeContext.state.mazePosition[0],
    //     top: mazeContext.state.mazePosition[1] - mazeContext.state.scale / 2,
    //     width: mazeContext.state.scale
    //   }}
    // />
    <canvas
      ref={spriteCanvasRef}
      width={mazeContext.state.scale * mazeContext.state.size}
      height={mazeContext.state.scale * mazeContext.state.size}
      id="sprite-canvas"
    />

  );

};

export default Sprite;