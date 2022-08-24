import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({ loading, ToDos, completedToDos }) {
    
  return (
    <div className="to-do__counter">
      {loading && (<span>Loading...</span>)}
      {!loading && (<span>You've done {completedToDos.length} tasks of {ToDos.length}</span>)}
    </div>
  );
}

export { ToDoCounter };
