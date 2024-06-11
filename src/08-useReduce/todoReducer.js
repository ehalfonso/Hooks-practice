import React from "react";

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((item) => item.id !== action.payload);
    case "[TODO] Toggle Todo":
      return initialState.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    default:
      return initialState;
  }
};
