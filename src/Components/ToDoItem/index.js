import React from "react";
import "./ToDoItem.css";

function ToDoItem ( {text,completed, data_key, toggleTodo, deleteTodo}){
    const checkChange = (target)=>{
        toggleTodo(data_key, target.checked)
    }
    return(
        <div className={`${completed ? "completed" : ""} to-do-item`}>
            <label
                className="checkbox__container">
                <input
                    type="checkbox"
                    checked = {completed} 
                    className="item--complete-button"
                    onChange={(event)=> {checkChange(event.target)} }
                ></input>
                <span
                    className="checkbox__checkmark"
                    
                
                ></span>
            </label>
            <p>
                { text }
            </p>
            <span 
                className="item--delete-button" 
                onClick={()=>{deleteTodo(data_key)}}>
            X
            </span>
        </div>
    )
}

export { ToDoItem };