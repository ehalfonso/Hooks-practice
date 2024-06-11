import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onnewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length < 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    onnewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        value={description}
        name="description"
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
