import React, { useState, useRef } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  const resetName = () => {
    setName("");
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <div>
        <label>Name:</label>
        <input
          name="name"
          ref={inputRef}
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => resetName()}>Reset</button>
      </div>
      <div>My name is {name}</div>
    </div>
  );
};

export default UseRefHook;
