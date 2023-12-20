import React, { useState, useContext, createContext } from "react";
const UserContext = createContext();

const Component1 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component 2</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
};

export default Component1;
