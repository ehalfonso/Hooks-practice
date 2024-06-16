import { todoReducer } from "../../08-useReduce/todoReducer";

describe("Test on todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("should return the initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("should add a new todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Demo Todo 2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
  test("should remove a todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });
  test("should toggle a todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
