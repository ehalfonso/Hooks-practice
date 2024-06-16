import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReduce/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock("../../hooks/useTodo");

describe("Test on <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo #1",
        done: false,
      },
      { id: 2, description: "Todo #2", done: true },
    ],
    todosCount: 2,
    pendinTodosCount: 1,
    onNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test("should show the component correctly", () => {
    render(<TodoApp />);
    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
