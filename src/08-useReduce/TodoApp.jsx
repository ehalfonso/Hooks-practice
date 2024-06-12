import { TodoAdd, TodoList } from "./components";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendinTodosCount,
    onNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();
  return (
    <>
      <h1>
        Todo App: ({todosCount}), <small>pendientes: {pendinTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <TodoAdd onnewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
