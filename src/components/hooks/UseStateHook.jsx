import { useState } from "react";

const UseStateHook = () => {
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("Guest");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Hello, {userName}!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter new username"
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UseStateHook;
