// View component - Root page for logged in users
import React from 'react';
import { useHistory } from 'react-router-dom';

// Element Components
import Button from 'components/elements/Button/Button';

// Files
import 'components/views/views.scss';
import './Home.scss';

const Landing = () => {

  const history = useHistory();

  return (
    <div className="Main Home_wrapper">
      <div className="logo-animated">
        a
        <span className="maze-highlight">MAZE</span>
        ment
      </div>
      <div className="btn-options">
        
      </div>
      <Button
        id="launch-btn"
        className="btn draw-border"
        type="button"
        name="launch-btn"
        text="Launch"
        onClick={() => {
          console.log('clicked');
        }}
      />
    </div>
  );

};

export default Landing;