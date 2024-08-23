import React, { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todoContext";

export const TodoItem = ({ todoItem, isDone, onDoneButton }) => {
  const { removeTodo } = useContext(TodoItemsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoItem);

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    setEditedText(todoItem); // Reset edited text to current todo item
  };

  // Function to handle text edit
  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  // Function to save edited todo item
  const handleSave = () => {
    // Update todo item logic (e.g., dispatch action)
    console.log("Save edited text:", editedText);

    // Here you would dispatch an action to update the todo item text
    // Example:
    // updateTodoItem(todoItem, editedText);

    // Exit edit mode
    setIsEditing(false);
  };

  // Function to get current date and time in a formatted string
  const getCurrentDateTime = () => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <li
      className={`flex items-center justify-between p-4 rounded ${
        isDone ? "bg-emerald-600" : "bg-gray-900"
      } transition-colors duration-200`}
    >
      <div className="flex flex-col">
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            className="text-gray-200 bg-transparent outline-none border-b border-gray-300 focus:border-gray-400 px-1"
          />
        ) : (
          <>
            <p className={`text-gray-200 text-lg ${isDone && "line-through"}`}>
              {todoItem}
            </p>
            <span className="text-xs text-white">{getCurrentDateTime()}</span>
          </>
        )}
      </div>

      <div className="flex">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-white py-2 px-4 ml-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors duration-200"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={toggleEditMode}
              className="text-white py-2 px-4 ml-2 bg-gray-700 hover:bg-gray-800 rounded transition-colors duration-200"
            >
              Edit
            </button>
            <button
              className="text-white py-2 px-4 ml-2 bg-red-600 hover:bg-red-700 rounded transition-colors duration-200"
              onClick={(event) => removeTodo(event, todoItem)}
            >
              Remove
            </button>
            
              {isDone ? "" : <button
              className={`text-white py-2 px-4 ml-2 ${
                isDone
                  ? "bg-emerald-700 hover:bg-emerald-800"
                  : "bg-slate-800 hover:bg-slate-700"
              } rounded transition-colors duration-200`}
              onClick={(event) => (isEditing ? handleSave(event) : onDoneButton(event, todoItem))}
            >Done</button>}
            
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
