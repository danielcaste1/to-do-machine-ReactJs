import React from "react";
import "./ToDoList.css"



function ToDoList (props){

    const renderFunc = props.children || props.render;

    return(
        
        <div className="to-do-list">
            <h3 className="to-do-list__title">Your tasks</h3>
            
            {
                //if error
                !!props.error && props.onError()
            }
            {
                //if loading or no sincronized
                (!!props.loading || !props.sincronize) && props.onLoad()
            }
            {
                //if not loading, no filtered To Dos, no Search Value
                (!props.loading && !props.filteredToDos.length && !props.searchValue.length)  && props.onEmptyToDos()
            }
            {
                //if not loading, not filtered To Dos, but with some Search Value
                (!props.loading && !props.filteredToDos.length && !!props.searchValue.length) && props.onEmptySearchResults()
            }
            {
                //if not loading, neither sincronizing then show filtered ToDos
                (!props.loading && props.sincronize) && props.filteredToDos.map(renderFunc)
            }
        </div>
    )
}

export { ToDoList };