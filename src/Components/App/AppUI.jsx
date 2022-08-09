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
            {filteredToDos.map(item => {
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