import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext({});

const todoItemsReducer = (currentTodoItems, actionObj) => {
  let newTodoItems = currentTodoItems;
  if (actionObj.type === "ADD_ITEM") {
    newTodoItems = [...currentTodoItems, actionObj.payload.item];
  } else if (actionObj.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item !== actionObj.payload.item
    );
  }
  return newTodoItems;
};

export default function TodoItemsContextProvider({ children }) {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function addTodo(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      const newItemAction = {
        type: "ADD_ITEM",
        payload: {
          item: event.target.value,
        },
      };
      dispatchTodoItems(newItemAction);
      event.target.value = "";
    }
  }

  function removeTodo(event, todoItem) {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        item: todoItem,
      },
    };
    dispatchTodoItems(newItemAction);
  }

  return (
    <TodoItemsContext.Provider value={{ todoItems, addTodo, removeTodo }}>
      {children}
    </TodoItemsContext.Provider>
  );
}
