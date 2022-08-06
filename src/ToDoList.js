import React from "react";

function ToDoList (props){
    return(
        <div>
            <h3>Aquí van tus tareas</h3>
            {props.children}
        </div>
    )
}

export { ToDoList };