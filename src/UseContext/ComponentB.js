import React, { useContext } from "react";
import { UserContext } from "./index";

export default function ComponentB() {
  const userDetails = useContext(UserContext);
  return <div>Component B Age {userDetails.age}</div>;
}
