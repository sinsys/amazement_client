// Scaffolding Component - Header
import React from 'react';
import { useHistory } from 'react-router-dom';

// Element Components 
import Button from 'components/elements/Button/Button';
import Timer from 'components/widgets/Timer/Timer';

// Files / Images
import './Header.scss';

const Header = () => {

  const history = useHistory();

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
            history.push('/options')
          }}
        />
      <Timer />
    </header>

  );

};

export default Header;