import React from "react";
import { WithCounter } from "./WithCounter";

function MouseHoverCounter(props) {
  const { counter, handleClickCounter } = props;
  return (
    <div>
      <h1>{counter}</h1>
      <button onMouseOver={handleClickCounter}>Hover Counter</button>
    </div>
  );
}

export default WithCounter(MouseHoverCounter);
