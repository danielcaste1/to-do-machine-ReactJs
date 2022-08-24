import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

function useToDos() {
  const appTitle = "To-Do List";

  const [searchValue, setSearchValue] = React.useState("");
  const searchChanged = (event) => {
    setSearchValue(event.target.value);
  };
  const {
    item: ToDos,
    saveItem: setToDos,
    loading,
    error,
  } = useLocalStorage("toDoList", []);
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

  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (key) => {
    const newToDos = ToDos.map((todo) => {
      if (ToDos[key] === todo) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setToDos(newToDos);
  };

  const deleteTodo = (key) => {
    const newToDos = ToDos.reduce((arr, todo) => {
      if (!(ToDos[key] === todo)) {
        arr.push(todo);
      }
      return arr;
    }, []);
    setToDos(newToDos);
  };

  const addNewTodo = () => {
    const newToDos = [{ text: newTodo, completed: false }, ...ToDos];
    setToDos(newToDos);
    setNewTodo("");
    toggleModal();
  };

  const updateDocTitle = () => {
    if (!ToDos.length) {
      document.title = `To-Do List`;
    } else {
      const taskLeft = ToDos.length - completedToDos.length;
      if (!taskLeft) {
        document.title = `Everything done!`;
      } else {
        document.title = `${ToDos.length - completedToDos.length} task left`;
      }
    }
  };

  useEffect(() => {
    updateDocTitle();
  }, [ToDos]);

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return {
    appTitle,
    completedToDos,
    ToDos,
    loading,
    error,
    searchValue,
    setSearchValue,
    searchChanged,
    filteredToDos,
    toggleTodo,
    newTodo,
    setNewTodo,
    addNewTodo,
    deleteTodo,
    openModal,
    toggleModal,
  };
}

export { useToDos };
