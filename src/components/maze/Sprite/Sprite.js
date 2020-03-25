// Scaffolding Component - Header
import React from 'react';

// Files / Images
import './Sprite.scss';

const Sprite = () => {

  const spriteCanvasRef = React.useRef(null);

  return (

    <canvas
      ref={spriteCanvasRef}
      width={100}
      height={100}
    />

  );

};

export default Sprite;