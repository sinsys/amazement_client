// Element component - Error Message (for forms)
import React from 'react';

// Files / Icons
import './ErrorMsg.scss';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Takes the props.message and displays it with special treatment
const ErrorMsg = (props) => {
  return (
    <span className="form-error-label">
      <FontAwesomeIcon icon={faExclamationCircle} />
      {props.message}
    </span>
  );
}

export default ErrorMsg;