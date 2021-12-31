import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState([]); // set to empty array as default
  return <h2>useState array example</h2>;
};

export default UseStateArray;
