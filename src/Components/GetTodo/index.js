import { useEffect, useState } from "react";
import TodoItem from "../TodoItem";

import "./index.css";

const GetTodo = (props) => {
  const { todos, setTodos } = props;
  const [showAll, setShowAll] = useState(true);
  const alltasks = todos;
  const completedTasks = todos.filter((todo) => todo.completed);

  const fetchedData = async () => {
    try {
      const api = "https://jsonplaceholder.typicode.com/users/1/todos";
      const respone = await fetch(api);
      const data = await respone.json();
      setTodos([...todos, ...data]);
    } catch (error) {
      console.log("Error fetching Todo", error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const deleteTodo = (id) => {
    const filtredData = todos.filter((todo) => todo.id !== id);
    setTodos(filtredData);
  };

  const checkedTodo = (id) => {
    const checkedData = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(checkedData);
  };

  const editedTodo = (id, newTodo) => {
    const edited = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTodo } : todo
    );
    setTodos(edited);
  };

  return (
    <div className="getTodo-container">
      <div>
        <button
          className={`tab-btn ${showAll ? "active" : ""}`}
          type="button"
          onClick={() => setShowAll(true)}
        >
          All
        </button>
        <button
          className={`tab-btn ${!showAll ? "active" : ""}`}
          type="button"
          onClick={() => setShowAll(false)}
        >
          Completed
        </button>
      </div>
      <ul>
        {showAll
          ? alltasks.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                checkedTodo={checkedTodo}
                editedTodo={editedTodo}
              />
            ))
          : completedTasks.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                checkedTodo={checkedTodo}
                editedTodo={editedTodo}
              />
            ))}
      </ul>
    </div>
  );
};

export default GetTodo;

/* 
 {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              checkedTodo={checkedTodo}
              editedTodo={editedTodo}
            />
          ))}
 */
