// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoAddButton } from "../ToDoAddButton";


const appTitle = "To Do Machine"
const toDoList = [
  {
    text: "Yo puedo perdonarte si es que estás arrepentida pero volver contigo no lo puedo hacer ni en sueños",
    completed: true
  },
  {
    text: "Aprender React",
    completed: false
  },
  {
    text: "Meditar",
    completed: false
  },
  {
    text: "Hacer aseo",
    completed: true
  },
  {
    text: "Gym",
    completed: true
  },
  {
    text: "Aprender React",
    completed: false
  },
  {
    text: "Meditar",
    completed: true
  },
  {
    text: "Hacer aseo",
    completed: false
  },
]

function App() {
 
  const [searchValue, setSearchValue] = React.useState('');

  const [ToDos, setToDos] = React.useState(toDoList);

  const completedToDos = ToDos.filter(todo => !!todo.completed);

  let filteredToDos = [];
  if(!(searchValue.length >= 1)){
    filteredToDos = ToDos;
  }else{
    filteredToDos = ToDos.filter(todo => {
      const todoText = todo.text.toUpperCase();
      const searchText = searchValue.toUpperCase();
      return todoText.includes(searchText);
    })
  }

  const toggleTodo = (key, isCompleted) => {
    const newToDos = ToDos.map(todo => {
      if(ToDos[key] === todo){
        todo.completed = isCompleted;
      }
      return todo;
    })
    setToDos(newToDos)
  }

  const deleteTodo = (key) => {
    const newToDos = ToDos.reduce((arr, todo)=>{
      if(!(ToDos[key] === todo)){
        arr.push(todo)
      }
      return  arr
    }, [] )
    setToDos(newToDos)
  }

  return(
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

export default App;
