import React from "react";

function ToDoItem (props){
    return(
        <div>
            <p>
                { props.text }
            </p>
        </div>
    )
}

export { ToDoItem };