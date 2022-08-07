import React from "react";
import "./ToDoSearch.css"
function ToDoSearch (){
    return(
        <div className="search-section">
            <input type="text" placeholder="Buscar..." />
        </div>
    )
}
export { ToDoSearch };