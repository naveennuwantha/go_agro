import React, { createContext, useState } from 'react';

export const StepperContext = createContext();

export const StatusProvider = ({ children }) => {
  const [statusIndex, setStatusIndex] = useState(0);

  return (
    <StepperContext.Provider value={{ statusIndex, setStatusIndex }}>
      {children}
    </StepperContext.Provider>
  );
};
