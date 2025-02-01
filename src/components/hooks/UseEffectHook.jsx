import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [todos]);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;


  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Todos List</h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-3 rounded-lg shadow-md flex justify-between items-center ${todo.completed ? "bg-green-100" : "bg-red-100"}`}
          >
            <span>{todo.title}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectHook;
