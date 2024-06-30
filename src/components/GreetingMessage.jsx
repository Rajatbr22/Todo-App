import { useContext } from "react";
import { TodoItemsContext } from "../store/todoContext";

const GreetingMessage = () => {
  let { todoItems } = useContext(TodoItemsContext);
    if (todoItems.length === 0){
        return (
            <h2 className="text-lg text-gray-200">
              Let's add your first To-do of the day! 🙂
            </h2>
          );
    }
    else return <></>
};

export default GreetingMessage;
