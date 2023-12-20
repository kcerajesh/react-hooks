import React, { createContext, useState } from "react";
import Component2 from "./Component2";

const UserContext = createContext();

const UseContextHook = () => {
  return (
    <div className="container">
      <UserContext.Provider value={user}>
        <h1>{`Hello Rajesh!`}</h1>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextHook;
