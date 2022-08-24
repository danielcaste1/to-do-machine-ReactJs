import React, {} from "react";
import "./ToDoTitle.css"


function ToDoTitle ({appTitle}){
    return(
        <h1 className="app-title">
            {appTitle}
        </h1>
    )
}

export { ToDoTitle };