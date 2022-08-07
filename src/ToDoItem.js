import React from "react";
import "./ToDoItem.css";

function ToDoItem (props){
    const checkChange = (target)=>{
        console.log(target);
        console.log(`Haz completado la tarea  : ${props.text}`)
    }
    return(
        <div className="to-do-item">
            <input
            type="checkbox"
            checked = {props.completed} 
            className="item--complete-button"
            onChange={(event)=> {checkChange(event.target)} }
            >

            </input>
            <span className="item--delete-button" >X</span>
            <p className={`${props.completed ? "completed" : ""}`}>
                { props.text }
            </p>
            
        </div>
    )
}

export { ToDoItem };