import { useContext } from "react";
import { TodoItemsContext } from "../store/todoContext";

export const TodoItem = ({ todoItem, isDone, onDoneButton }) => {
  let {removeTodo} = useContext(TodoItemsContext);
  return (
    <li
      className={`flex items-center justify-between p-4  rounded ${
        isDone ? "bg-emerald-600" : "bg-gray-900"
      } transition-colors duration-200`}
    >
      <p className={`text-gray-200 text-lg ${isDone && "line-through"}`}>
        {todoItem}
      </p>

      {isDone ? (
        <button
          className={`text-white py-3 px-6 ml-4 ${
            isDone
              ? "bg-emerald-700 hover:bg-emerald-800"
              : "bg-slate-800 hover:bg-slate-700"
          } rounded transition-colors duration-200`}
          onClick={(event) => removeTodo(event, todoItem)}
        >
          Remove
        </button>
      ) : (
        <button
          className={`text-white py-3 px-6 ml-4 ${
            isDone
              ? "bg-emerald-700 hover:bg-emerald-800"
              : "bg-slate-800 hover:bg-slate-700"
          } rounded transition-colors duration-200`}
          onClick={(event) => onDoneButton(event, todoItem)}
        >
          Done
        </button>
      )}
    </li>
  );
};

export default TodoItem;
