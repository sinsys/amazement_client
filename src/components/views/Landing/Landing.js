// View component - Root page for logged in users
import React from 'react';
import { useHistory } from 'react-router-dom';

// Element Components
import Button from 'components/elements/Button/Button';

// Files / Images
import 'components/views/views.scss';
import './Landing.scss';
import keyUp from 'assets/images/cursor-up.png';
import keyRight from 'assets/images/cursor-right.png';
import keyDown from 'assets/images/cursor-down.png';
import keyLeft from 'assets/images/cursor-left.png';
import mobileControls from 'assets/images/mobile-controls.jpg';
import trophy from 'assets/images/trophy.svg';

const Landing = () => {

  const history = useHistory();

  return (
    <div className="Main Landing_wrapper">

      <div className="logo">
        a
        <span className="maze">MAZE</span>
        ment
      </div>

      <div className="app-description">
        <h2>Description</h2>
        <p>aMAZEment is a maze runner style game where you have to navigate through a randomly generated maze as quickly as possible. Your run will be timed and will be shown when you complete the maze.</p>
        <p>There is one catch... you cannot see the entire maze! You will be limited to a reduced viewport of the maze and must traverse it to win. But don't worry; any tiles you have already stepped on will be marked so that you don't repeat yourself.</p>
      </div>

      <div className="app-objectives">
        <h2>Objectives</h2>
        <ul className="objectives-list">
          <li>Get to the bottom right side of the maze</li>
          <li><span>Collect the trophy</span><img src={trophy} className="trophy" alt="trophy" /></li>
        </ul>
      </div>

      <div className="app-considerations">
        <h2>Considerations</h2>
        <p>If on mobile, this app is designed to run in portrait mode. It should work on landscape but is not recommended.</p>
      </div>

      <div className="app-controls">
        <h2>Controls</h2>
        <p>Desktop users use the arrow keys on your keyboard:</p>
        <ul className="keyboard-keys-list">
          <li>
            <img src={keyUp} alt="keyboard-up" />
          </li>
          <li>
            <img src={keyRight} alt="keyboard-right" />
          </li>
          <li>
            <img src={keyDown} alt="keyboard-down" />
          </li>
          <li>
            <img src={keyLeft} alt="keyboard-left" />
          </li>
        </ul>
        <p>Mobile users can tap on the direction to move:</p>
        <ul className="mobile-controls-list">
          <li>
            <img src={mobileControls} alt="mobile-controls" />
          </li>
        </ul>
      </div>
      <div className="btn-options-row">
        <Button
          id="launch-btn"
          className="launch-btn draw-border-launch btn"
          type="button"
          name="launch-btn"
          text="Let's Go"
          onClick={() => {
            history.push('/home')
          }}
        />
      </div>
    </div>
  );

};

export default Landing;