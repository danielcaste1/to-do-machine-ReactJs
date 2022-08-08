import React from "react";
import "./ToDoSearch.css"
function ToDoSearch ( {searchValue, setSearchValue} ){
    const searchChanged = (event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <div className="search-section">
            <input 
            type="text" 
            placeholder="Buscar..."
            value={searchValue}
            onChange={searchChanged}
            />
        </div>
    )
}
export { ToDoSearch };