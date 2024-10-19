import React from "react";
import ClickCounter from "./ClickCounter";
import MouseHoverCounter from "./MouseHoverCounter";

export default function HOC() {
  return (
    <div>
      <ClickCounter name="Thabares" />
      <MouseHoverCounter />
    </div>
  );
}
