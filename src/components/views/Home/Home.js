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
      <blockquote className="logo-caption">
        A timed mazerunner game
      </blockquote>

      <section className="btn-options_wrapper">

        <div className="btn-options-row">
          <Button
              id="launch-btn"
              className="launch-btn draw-border-launch btn"
              type="button"
              name="launch-btn"
              text="Launch"
              onClick={() => {
                history.push('/options')
              }}
            />
          <Button
              id="login-btn"
              className="login-btn draw-border-login btn"
              type="button"
              name="login-btn"
              text="Log In"
              onClick={() => {
                // history.push('/login');
              }}
              disabled
            />    
          <Button
            id="signup-btn"
            className="signup-btn draw-border-signup btn"
            type="button"
            name="signup-btn"
            text="Sign Up"
            onClick={() => {
              // history.push('/signup')
            }}
            disabled
          />
        </div>
      </section>


    </div>
  );

};

export default Landing;