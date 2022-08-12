import React from "react";
import { AppUI } from "./AppUI.jsx";
import { useLocalStorage } from "../../Hooks/useLocalStorage"



function App() {
  const appTitle = "To Do Machine"
  const [searchValue, setSearchValue] = React.useState('');
  const {
    item: toDos, 
    saveItem : setToDos,
    loading,
    error
  } = useLocalStorage("toDoList", []);
 
  
  const completedToDos = toDos.filter(todo => todo.completed);

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

  /**
   * //uselayoutEffect() -> Este hook ejecuta el código que le enviemos, justo después de renderizar el componente.
    //useEffect() -> Este hook ejecuta el código que le enviemos, justo antes de renderizar el componente.
    React.useEffect(()=>{
      console.log('Se está ejecutando un useEffect()')
    },[toDos])//este ultimo parametro indica que parametros vamos a "Escuchar", el "Escuchador" se va activar cada vez que se actualice el estado de este parametro.
   */


  return(
    <AppUI
      appTitle={ appTitle }
      completedToDos = { completedToDos }
      ToDos={ toDos }
      loading={ loading }
      error={ error }
      searchValue= { searchValue }
      setSearchValue= { setSearchValue }
      filteredToDos={ filteredToDos }
      toggleTodo = { toggleTodo }
      deleteTodo = { deleteTodo }
    />
  )
}

export default App;


