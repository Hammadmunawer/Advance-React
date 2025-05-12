import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setinputValue("");
    }
  };

  const handleChange = e => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="enter task"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit">add todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
