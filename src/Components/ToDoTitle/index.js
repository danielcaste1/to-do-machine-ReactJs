import React from "react";
import "./ToDoTitle.css"

function ToDoTitle (props){
    return(
        <h1 className="app-title">{ props.title }</h1>
    )
}

export { ToDoTitle };