import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./index.css";

const TodoItem = (props) => {
  const { todo, deleteTodo, checkedTodo, editedTodo } = props;
  const { title, id, completed } = todo;
  const [editedTittle, setEditedTittle] = useState("");
  const [isEditing, setisEditing] = useState(false);

  const onDelete = () => {
    deleteTodo(id);
  };

  const onChecked = () => {
    checkedTodo(id);
  };

  const onEdit = () => {
    setisEditing(true);
  };

  const onSave = () => {
    if (!editedTittle) {
      alert("Please Enter Todo title");
    } else {
      editedTodo(id, editedTittle);
      setisEditing(false);
    }
  };

  return (
    <li className="li">
      <input
        className="check"
        type="checkbox"
        checked={completed}
        onChange={onChecked}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTittle}
            onChange={(e) => setEditedTittle(e.target.value)}
            className="input"
          />
          <button className="add-btn" type="button" onClick={onSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className={completed ? "title completed" : "title"}>{title}</h2>
          <div>
            <button className="btn" type="button" onClick={onDelete}>
              <MdDelete />
            </button>
            <button type="button" className="btn" onClick={onEdit}>
              <FaEdit />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
