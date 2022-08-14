import React, { useContext } from "react";
import "./ToDoCounter.css";
import { AppContext } from "../../Context";

function ToDoCounter() {
    
  const { completedToDos, ToDos } = useContext(AppContext);

  return (
    <div className="to-do__counter">
      <span>You've done {completedToDos.length} tasks of {ToDos.length}</span>
    </div>
  );
}

export { ToDoCounter };
