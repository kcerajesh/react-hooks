import React, { createContext, useState } from "react";
import Component2 from "./Component2";

const UserContext = createContext();

const UseContextHook = () => {
  const [user, setUser] = useState("Rajesh");

  return (
    <div className="container">
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextHook;
