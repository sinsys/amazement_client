// View component - Root page for logged in users
import React from 'react';

// Element Components
import Button from 'components/elements/Button/Button';

// Files
import 'components/views/views.scss';
import './Landing.scss';

const Landing = () => {

  return (
    <div className="Main Landing_wrapper">
      <Button
        id="launch-btn"
        className="launch-btn"
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