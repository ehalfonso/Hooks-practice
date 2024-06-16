import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../08-useReduce/components/TodoItem";

describe("Test on <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("should show the pendent todo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span1");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });
  test("should show the completed todo", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span1");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  test("should span call onToggleTodo when clicked", () => {
    render(
      //las prop tiene que tener el mismo nombre que en los componentes
      <TodoItem
        todo={todo}
        onDelete={onDeleteTodoMock}
        onToggle={onToggleTodoMock}
      />
    );
    //probando si se llama la funcion onToggle
    const toggleButton = screen.getByLabelText("toggle");
    fireEvent.click(toggleButton);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("should span call onDeleteTodo when clicked", () => {
    render(
      //las prop tiene que tener el mismo nombre que en los componentes
      <TodoItem
        todo={todo}
        onDelete={onDeleteTodoMock}
        onToggle={onToggleTodoMock}
      />
    );
    //probando si se llama la funcion onToggle
    //utilice la propiedad aria-label para identificar cada boton
    const deleteButton = screen.getByLabelText("delete");
    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
