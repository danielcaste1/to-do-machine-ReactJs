import React from "react";
import "./ToDoList.css"



function ToDoList (props){

    const renderFunc = props.children || props.render;

    return(
        
        <div className="to-do-list">
            <h3 className="to-do-list__title">Your tasks</h3>
            {!!props.error && props.onError()}
            {!!props.loading && props.onLoad()}
            {(!props.loading && !props.filteredToDos.length && !props.searchValue.length)  && props.onEmptyToDos()}
            {(!props.loading && !props.filteredToDos.length && !!props.searchValue.length) && props.onEmptySearchResults()}
            {props.filteredToDos.map(renderFunc)}
        </div>
    )
}

export { ToDoList };