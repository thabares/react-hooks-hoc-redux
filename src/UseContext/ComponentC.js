import React, { useContext } from "react";
import { UserContext } from "./index";

export default function ComponentC() {
  const userDetails = useContext(UserContext);
  return <div>Component C Gender {userDetails.gender}</div>;
}
