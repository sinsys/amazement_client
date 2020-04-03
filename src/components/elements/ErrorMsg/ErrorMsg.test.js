import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<ErrorMsg
        message="test"
      />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});