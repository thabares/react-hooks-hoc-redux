import React, { useState } from "react";

export default function UseState() {
  const [state, setState] = useState(0);
  const incrementHandler = () => {
    setState((previous) => previous + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Use State</h1>
      <h1>{state} Count</h1>
      <button onClick={incrementHandler}>You Clicked me {state} times</button>
    </div>
  );
}
