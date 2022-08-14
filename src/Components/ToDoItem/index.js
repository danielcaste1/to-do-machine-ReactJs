import React from "react";
import "./ToDoItem.css";

function ToDoItem({ text, completed, data_key, toggleTodo, deleteTodo }) {
  const checkChange = () => {
    toggleTodo(data_key);
  };
  return (
    <div className={`${completed ? "completed" : ""} to-do-item`}>
      <span
          className= "item--complete-button"
          onClick={() => {
            checkChange();
          }}
        >
          <i 
          className="fa-solid fa-check"
          ></i>
        </span>
      <p>{text}</p>
      <span
        className="item--delete-button"
        onClick={() => {
          deleteTodo(data_key);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
  );
}

export { ToDoItem };
