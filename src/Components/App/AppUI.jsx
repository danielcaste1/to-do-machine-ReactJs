import React from "react";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoAddButton } from "../ToDoAddButton";

function AppUI({ 
    appTitle,
    completedToDos ,
    ToDos,
    loading,
    error,
    searchValue,
    setSearchValue,
    filteredToDos,
    toggleTodo ,
    deleteTodo
    }){

    return (
        <React.Fragment>
        
        <ToDoTitle 
            title={appTitle}
        />
        <ToDoCounter
            completed = {completedToDos.length}
            total={ToDos.length}
        />
        
        <ToDoSearch 
            searchValue= {searchValue}
            setSearchValue= {setSearchValue}
        />
        
        <ToDoList>
            {loading && <p className="loading"><i className="fa-solid fa-circle-notch"></i></p>}
            {(!loading && !filteredToDos.length) &&  <p>Create your first To Do with the button above.</p>}
            {(!loading && error) &&  <p>Ocurrió un error, estamos trabajando en ello...</p>}
            
            { filteredToDos.map(item => {
            return <ToDoItem 
                    key={ filteredToDos.indexOf(item) } 
                    text={ item.text }
                    completed={item.completed}
                    data_key={ filteredToDos.indexOf(item) } 
                    toggleTodo = {toggleTodo}
                    deleteTodo = {deleteTodo}
                    />
            })}
        </ToDoList>
        
        <ToDoAddButton/>
        </React.Fragment>
    )
}

export { AppUI }

