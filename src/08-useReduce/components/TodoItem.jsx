import React from "react";

export const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center 
        ${todo.done ? "text-decoration-line-through" : ""}`}
        aria-label="span1"
      >
        {todo.description}
      </span>
      <span className="align-self-center" aria-label="span2">
        {todo.done === true ? "Completed" : "Uncomplete"}
      </span>
      <div>
        <button
          onClick={() => onToggle(todo.id)}
          className="btn btn-warning"
          aria-label="toggle"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-danger"
          aria-label="delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
