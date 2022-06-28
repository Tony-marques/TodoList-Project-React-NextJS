import { useState } from "react";
import TodoAdd from "../components/Todo/TodoAdd";
import TodoList from "../components/Todo/TodoList";
import { toast } from "react-toastify";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");

  function addTodo(content) {
    setError("");
    if (content.length) {
      const todo = {
        id: crypto.randomUUID(),
        content,
        done: false,
        edit: false,
      };

      setTodoList([...todoList, todo]);
      toast.success("Tâche ajoutée");
    } else {
      setError("Vous devez rentrer une tâche");
    }
  }

  function deleteTodo(id) {
    const filter = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(filter);
    toast.error("Tâche supprimée");
  }

  function validateTodo(id) {
    const filter = todoList.map((todo) => {
      todo.done && toast.info("Tâche non effectuée")
      !todo.done && toast.info("Tâche effectuée")
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });
    setTodoList(filter);
  }

  function toggleTodoEdit(id) {
    const filter = todoList.map((todo) => {
      return todo.id === id ? { ...todo, edit: !todo.edit } : todo;
    });
    setTodoList(filter);
  }

  function updateTodo(id, content) {
    const filter = todoList.map((todo) => {
      return todo.id === id ? { ...todo, edit: false, content } : todo;
    });
    setTodoList(filter);
    
  }

  return (
    <div className=" h-full p-5 flex flex-col items-center">
      <div className=" w-7/12 flex flex-col items-center ">
        <TodoAdd addTodo={addTodo} error={error} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          validateTodo={validateTodo}
          toggleTodoEdit={toggleTodoEdit}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}
