import React, { useState } from "react";

export default function TodoAdd({ addTodo, error }) {
  const [value, setValue] = useState("");

  function handleClickAddTodo() {
    addTodo(value);
    setValue("");
  }

  return (

      <div className="w-full flex flex-col  mb-5  bg-gray-200 p-4 rounded">
        <div className='flex justify-between'>
          <input
            type="text"
            className="bg-gray-500 p-2 mr-4 rounded border border-transparent text-white outline-none focus:border-red-700 focus:border w-8/12"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Ajouter une tâche"
          />
          <button
            onClick={handleClickAddTodo}
            className="bg-red-700 hover:bg-red-600 p-2 rounded border border-transparent text-white w-3/12"
          >
            Ajouter
          </button>
        </div>
        {error && <h1 className="mt-2 text-center text-red-700 font-medium text-lg">{error}</h1>}
      </div>

  );
}
