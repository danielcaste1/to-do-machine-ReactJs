// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { ToDoTitle } from "./ToDoTitle";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { ToDoAddButton } from "./ToDoAddButton";


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
  return(
    <React.Fragment>
      <ToDoTitle title={appTitle} />
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {toDoList.map(item => {
          return <ToDoItem key={toDoList.indexOf(item)} text={item.text} completed={item.completed}/>
        })}
      </ToDoList>
      <ToDoAddButton/>
    </React.Fragment>
  )
}

export default App;
