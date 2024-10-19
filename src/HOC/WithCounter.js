import React, { useState } from "react";

export const WithCounter = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [counter, setCounter] = useState(0);
    const handleClickCounter = () => {
      setCounter(counter + 1);
    };
    return (
      <OriginalComponent
        counter={counter}
        handleClickCounter={handleClickCounter}
        {...props}
      />
    );
  };

  return NewComponent;
};
