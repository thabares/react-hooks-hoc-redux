import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setState(json));
  }, []);
  return (
    <div>
      {state.map((items) => {
        return (
          <div key={items.id} style={{ margin: "2px" }}>
            {items.userId + " - " + items.title + " - "}{" "}
            {items.completed ? "Completed" : "Not Completed"}
          </div>
        );
      })}
    </div>
  );
}
