import { useState } from "react";
import GetTodo from "../GetTodo";
import { v4 } from "uuid";

import "./index.css";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const userId = 1;
  const newTodo = {
    id: v4(),
    title,
    completed: false,
    userId,
  };

  const HandlerSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please Enter Task");
    } else {
      setTodos([newTodo, ...todos]);
      setTitle("");
    }
  };

  return (
    <div className="container">
      <form className="todo-form" onSubmit={HandlerSubmit}>
        <input
          type="text"
          placeholder="Enter New Task"
          value={title}
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <GetTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;

/*
 const api = "https://jsonplaceholder.typicode.com/users/1/todos";
    const options = {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const respone = await fetch(api, options);
    const data = await respone.json();
    console.log(data); 
*/
