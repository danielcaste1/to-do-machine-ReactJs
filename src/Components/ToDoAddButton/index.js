import React from "react";
import "./ToDoAddButton.css";

function ToDoAddButton({ openModal, toggleModal, setShowingModal }) {
  return (
    <div className={`add-task`}>
      <button
        type="button"
        className={`add-task__button ${openModal ? "opened" : ""}`}
        onClick={() => {
          toggleModal();
          setShowingModal("addToDo");
        }}
      >
        +
      </button>
    </div>
  );
}

export { ToDoAddButton };
