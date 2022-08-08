import React from "react";
import './ToDoCounter.css'


function ToDoCounter ({completed, total }){
    
    return(
        <div className="to-do__counter">
            <span> Total Tareas: {total} </span>
            <span> Finalizadas: {completed} </span>
        </div>
    )
}

export { ToDoCounter };