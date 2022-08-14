import React, { useContext } from "react";
import "./ToDoAddButton.css";
import { AppContext } from "../../Context";

function ToDoAddButton (){
    const {openModal, toggleModal} = useContext(AppContext);
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

