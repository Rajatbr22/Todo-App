import { useContext } from "react";
import { TodoItemsContext } from "../store/todoContext";

export const AddTodo = () => {
  const { addTodo } = useContext(TodoItemsContext);

  return (
      <input
      type="text"
      placeholder="Add to-do"
      className="p-4 bg-gray-800 border rounded text-xl text-white sticky top-8"
      onKeyDown={addTodo}
    />

  );
};

export default AddTodo;
