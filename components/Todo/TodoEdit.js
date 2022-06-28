import React, { useState } from "react";
import {toast} from "react-toastify"

export default function TodoEdit({ todo, updateTodo, toggleTodoEdit }) {
  const [value, setValue] = useState("");

  function handleClickUpdateTodo() {
    updateTodo(todo.id, value ? value : todo.content);
    value && toast.success("Tâche mise à jour")
  }

  function handleClickToggleTodo(){
    toggleTodoEdit(todo.id)
  }

  return (
    <>
      <input
        type="text"
        className="bg-gray-500 rounded w-full p-1 outline-none border border-transparent focus:border focus:border-red-700"
        defaultValue={todo.content}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClickToggleTodo}className="ml-2 bg-red-700 py-1 px-3 rounded hover:bg-red-600 border border-transparent">
        Annuler
      </button>
      <button
        onClick={handleClickUpdateTodo}
        className="ml-2 bg-green-700 py-1 px-3 rounded hover:bg-green-600 border border-transparent"
      >
        Enregistrer
      </button>
    </>
  );
}
