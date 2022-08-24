import React from "react";
import "./ToDoAddButton.css";

function ToDoAddButton ({openModal, toggleModal}){
    return(
        <div className={`add-task`} >
            <button 
            type="button"
            className = {`add-task__button ${openModal ? "opened" : "" }`}
            onClick= {()=> {toggleModal()}}
            >
            
                +
            </button>
        </div>
    )
}

export { ToDoAddButton };

