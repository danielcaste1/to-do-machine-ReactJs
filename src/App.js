// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";

const toDoList = [
  {
    text: "Gym",
    completed: false
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
    completed: false
  },
]

function App() {
  return(
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {toDoList.map(item => {
          return <ToDoItem key={item.text} text={item.text}/>
        })}
      </ToDoList>
    </React.Fragment>
  )
}

export default App;
