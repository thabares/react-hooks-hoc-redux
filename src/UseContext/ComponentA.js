import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./index";

export default function ComponentA() {
  const userDetails = useContext(UserContext);
  return (
    <div>
      Component A Name {userDetails.name}
      <ComponentC />
    </div>
  );
}
