// Element component - Button
import React from 'react';

// Files
import './Button.scss';

// Used commonly throughout the app as a button. Accepts all props for configuration
const Button = (props) => {
  return (

    <button
      {...props}
    >
      {props.text}
    </button>

  );
};

export default Button;