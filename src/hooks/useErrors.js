import { useState } from 'react';

const useErrors = (validations) => {
  const createInitialState = (validations) => {
    const initialState = {};
  
    for (let field in validations) {
      initialState[field] = { valid: true, message: '' };
    }
  
    return initialState;
  };

  const initialState = createInitialState(validations);
  const [errors, setErrors] = useState(initialState);

  const handleValidations = (event, eventType) => {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value, eventType);

    setErrors(newState);
  };

  const isValid = () => {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }

    return true;
  };

  return [errors, handleValidations, isValid];
}

export default useErrors;
