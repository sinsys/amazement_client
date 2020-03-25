import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MazeContextProvider } from 'contexts/MazeContext';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Router>
      <MazeContextProvider>
  		  <Header />
      </MazeContextProvider>
  	</Router>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});