import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, deleteTodo, validateTodo, toggleTodoEdit, updateTodo }) {
  return (
    <div className="w-full flex flex-col justify-between mb-5  bg-gray-200 p-4 rounded">
      {todoList.length ? (
        todoList.map((todo) => {
          return (
            <div
              key={todo.id}
              className={`bg-gray-400 w-full flex p-2 my-2 rounded items-center text-white ${
                todo.done && "line-through"
              }`}
            >
              {todo.edit ? (
                <TodoEdit todo={todo} updateTodo={updateTodo} toggleTodoEdit={toggleTodoEdit}/>
              ) : (
                <TodoItem
                  todo={todo}
                  deleteTodo={deleteTodo}
                  validateTodo={validateTodo}
                  toggleTodoEdit={toggleTodoEdit}
                  updateTodo={updateTodo}
                />
              )}
            </div>
          );
        })
      ) : (
        <h1>Il n'y a aucune tâche pour le moment ...</h1>
      )}
    </div>
  );
}
