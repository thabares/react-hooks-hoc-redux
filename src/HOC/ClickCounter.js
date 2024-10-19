import React from "react";
import { WithCounter } from "./WithCounter";

function ClickCounter(props) {
  const { counter, handleClickCounter } = props;
  return (
    <div>
      <h1>
        {props.name} {counter}
      </h1>
      <button onClick={handleClickCounter}>Click Counter</button>
    </div>
  );
}

export default WithCounter(ClickCounter);
