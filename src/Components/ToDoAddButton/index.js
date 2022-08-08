import React from "react";
import "./ToDoAddButton.css"

function ToDoAddButton (){
    return(
        <div className="add-task">
            <button 
            className="add-task__button" 
            type="button"
            onClick={(e)=>{console.log(e)}}
            >
                +
            </button>
        </div>
    )
}

export { ToDoAddButton };