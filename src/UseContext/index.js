import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();

export default function UseContext() {
  return (
    <div>
      <UserContext.Provider
        value={{
          name: "Thabares",
          age: 26,
          gender: "Male",
        }}
      >
        <ComponentA />
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
