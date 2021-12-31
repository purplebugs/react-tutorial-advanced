import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // set to empty array as default
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            {name}
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
