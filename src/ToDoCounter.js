import React from "react";
import './ToDoCounter.css'


function ToDoCounter (){
    return(
        <div className="to-do__counter">
            <span> Realizadas: 0 </span>
            <span> Completadas: 0 </span>
        </div>
    )
}

export { ToDoCounter };