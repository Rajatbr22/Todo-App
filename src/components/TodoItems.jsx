import { useState } from "react";
import TodoItem from "./TodoItem";

import { useContext } from "react";
import { TodoItemsContext } from "../store/todoContext";

export const TodoItems = () => {

    let {todoItems} = useContext(TodoItemsContext);

    const [completedTodo, setCompletedTodo] = useState([]);

    function handleDoneButton(event, todoItem){
        let newCompletedTodo = [...completedTodo, todoItem];
        setCompletedTodo(newCompletedTodo);
    }

  return (
    <ul className="flex flex-col gap-3">
    {todoItems.map(item => <TodoItem key={item} todoItem={item} onDoneButton={handleDoneButton} isDone={completedTodo.includes(item)} />)}
    </ul>
  );
};

export default TodoItems;
