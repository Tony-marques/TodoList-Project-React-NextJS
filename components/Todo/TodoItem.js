import React from "react";

export default function TodoItem({
  todo,
  deleteTodo,
  validateTodo,
  toggleTodoEdit,
}) {
  function handleClickDeleteTodo() {
    deleteTodo(todo.id);
  }

  function handleClickValidateTodo() {
    validateTodo(todo.id);

  }

  function handleClickUpdateTodo() {
    toggleTodoEdit(todo.id);
  }

  return (
    <>
      <h2>{todo.content}</h2>
      <div className="ml-auto">
        <button
          onClick={handleClickValidateTodo}
          className="bg-blue-700 hover:bg-blue-600 py-1 px-3 text-white rounded mx-1 border border-transparent"
        >
          Valider
        </button>
        <button
          onClick={handleClickUpdateTodo}
          className="bg-green-700 hover:bg-green-600 py-1 px-3 text-white rounded mx-1 border border-transparent"
        >
          Modifier
        </button>
        <button
          onClick={handleClickDeleteTodo}
          className="bg-red-700 hover:bg-red-600 py-1 px-3 text-white rounded mx-1 border border-transparent"
        >
          Supprimer
        </button>
      </div>
    </>
  );
}
