// Scaffolding Component - Header
// This is used for back navigation and the timer
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

// Element Components 
import Button from 'components/elements/Button/Button';
import Timer from 'components/widgets/Timer/Timer';

import { MazeContext } from 'contexts/MazeContext';

// Files / Images
import './Header.scss';

const Header = () => {

  const history = useHistory();
  const { dispatch } = useContext(MazeContext);

  // Toggles header style if user is logged in or not
  return (

    <header className="Header_wrapper">
      <Button
          id="back-btn"
          className="back-btn draw-border-back-btn btn"
          type="button"
          name="back-btn"
          text="&#171;"
          onClick={() => {
            dispatch({ value: "reset-game" });
            history.push('/options');
          }}
        />
      <Timer />
    </header>

  );

};

export default Header;