// Hook for easy to manage controlled form inputs.
import { useState } from 'react';

export const useInputChange = (defaults = {}) => {

  // Set input object to store all edited input fields
  const [input, setInput] = useState(defaults);

  // Update our state, or create a new input property based on the input's name
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    [input, handleInputChange]
  );
  
};