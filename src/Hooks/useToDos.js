import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

function useToDos() {

  const [searchValue, setSearchValue] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const {
    item: ToDos,
    saveItem: saveToDos,
    syncItem: syncTodos,
    loading,
    error,
  } = useLocalStorage("toDoList", []);

  const updateDocTitle = () => {
    document.title = `To-Do List`;
    const taskLeft = ToDos.length - completedToDos.length;
    if (taskLeft) {
      document.title = `${taskLeft} task left`;
    }
  };

  useEffect(() => {
    updateDocTitle();
  }, [ToDos]);

  const completedToDos = ToDos.filter((todo) => todo.completed);

  let filteredToDos = [];
  if (!(searchValue.length >= 1)) {
    filteredToDos = ToDos;
  } else {
    filteredToDos = ToDos.filter((todo) => {
      const todoText = todo.text.toUpperCase();
      const searchText = searchValue.toUpperCase();
      return todoText.includes(searchText);
    });
  }

  const searchChanged = (value) => {
    setSearchValue(value);
  };

  const toggleTodo = (key) => {
    const newToDos = ToDos.map((todo) => {
      if (ToDos[key] === todo) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    saveToDos(newToDos);
  };

  const addNewTodo = () => {
    const newToDos = ToDos.slice();
    const toDoToAdd = { text: newTodo, completed: false }
    newToDos.unshift(toDoToAdd);
    saveToDos(newToDos);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    const newToDos = ToDos.slice();
    newToDos.splice(index, 1);
    saveToDos(newToDos);
  };

  const state = {
    completedToDos,
    ToDos,
    loading,
    error,
    filteredToDos,
    searchValue,
    newTodo,
  };
  const stateUpdaters = {
    syncTodos,
    setSearchValue,
    searchChanged,
    toggleTodo,
    setNewTodo,
    addNewTodo,
    deleteTodo,
  };
  return {
    state,
    stateUpdaters,
  };
}

export { useToDos };
