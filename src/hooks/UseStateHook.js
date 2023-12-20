import React, { useState } from "react";

const UseStateHook = () => {
  const [color, setColor] = useState("black");
  return (
    <div className="container">
      <h1 style={{ color: `${color}` }}>My Favourite Color is {color} !</h1>
      <div>
        <button className="spacing" onClick={() => setColor("red")}>Red</button>
        <button className="spacing" onClick={() => setColor("blue")}>Blue</button>
        <button className="spacing" onClick={() => setColor("green")}>Green</button>
        <button className="spacing" onClick={() => setColor("gray")}>Orange</button>
      </div>
    </div>
  );
};

export default UseStateHook;
