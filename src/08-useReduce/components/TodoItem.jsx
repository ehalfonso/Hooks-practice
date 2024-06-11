import React from "react";

export const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center 
        ${todo.done ? "text-decoration-line-through" : ""}`}
      >
        {todo.description}
      </span>
      <span className="align-self-center">
        {todo.done === true ? "Completed" : "Uncomplete"}
      </span>
      <div>
        <button onClick={() => onToggle(todo.id)} className="btn btn-warning">
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};
