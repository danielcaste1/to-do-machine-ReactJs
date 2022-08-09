import React from "react";
import { AppUI } from "./AppUI.jsx";
import { useLocalStorage } from "../../Hooks/useLocalStorage"









function App() {
  const appTitle = "To Do Machine"
 
  const [toDos, setToDos] = useLocalStorage("toDoList", []);
 
  
  const completedToDos = toDos.filter(todo => todo.completed);
  
  const [searchValue, setSearchValue] = React.useState('');

  let filteredToDos = [];
  if(!(searchValue.length >= 1)){
    filteredToDos = toDos;
  }else{
    filteredToDos = toDos.filter(todo => {
      const todoText = todo.text.toUpperCase();
      const searchText = searchValue.toUpperCase();
      return todoText.includes(searchText);
    })
  }

  const toggleTodo = (key, isCompleted) => {
    const newToDos = toDos.map(todo => {
      if(toDos[key] === todo){
        todo.completed = isCompleted;
      }
      return todo;
    })
    setToDos(newToDos)
  }

  const deleteTodo = (key) => {
    const newToDos = toDos.reduce((arr, todo)=>{
      if(!(toDos[key] === todo)){
        arr.push(todo)
      }
      return  arr
    }, [] )
    setToDos(newToDos)
    
  }

  return(
    <AppUI
      appTitle={appTitle}
      completedToDos = {completedToDos}
      ToDos={toDos}
      searchValue= {searchValue}
      setSearchValue= {setSearchValue}
      filteredToDos={ filteredToDos }
      toggleTodo = {toggleTodo}
      deleteTodo = {deleteTodo}
    />
  )
}

export default App;


