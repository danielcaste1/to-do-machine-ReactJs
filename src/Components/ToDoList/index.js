import React from "react";
import "./ToDoList.css"
function ToDoList (props){
    return(
        <div className="to-do-list">
            <h3 className="to-do-list__title">Your tasks</h3>
            {props.children}
        </div>
    )
}

export { ToDoList };