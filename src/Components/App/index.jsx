import React from "react";
import { useToDos } from "./useToDos";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoLoad } from "../ToDoLoad";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoAddButton } from "../ToDoAddButton";
import { Modal } from "../Modal";
import { ModalCard } from "../ModalCard";
import { ToDoError } from "../ToDoError";
import { EmptyToDos } from "../EmptyToDos";
import { EmptySearchResults } from "../EmptySearchResults";

function App() {
  const {
    appTitle,
    completedToDos,
    ToDos,
    loading,
    searchValue,
    searchChanged,
    filteredToDos,
    error,
    toggleTodo,
    deleteTodo,
    newTodo,
    setNewTodo,
    addNewTodo,
    openModal,
    toggleModal,
  } = useToDos();
  return (
    <React.Fragment>
      <ToDoTitle appTitle={appTitle}></ToDoTitle>

      <ToDoHeader loading={loading}>
        
        <ToDoCounter
          completedToDos={completedToDos}
          ToDos={ToDos}
        ></ToDoCounter>

        <ToDoSearch
          searchValue={searchValue}
          searchChanged={searchChanged}
        ></ToDoSearch>

      </ToDoHeader>

      <ToDoList
        error={error}
        onError={() => <ToDoError />}
        loading={loading}
        onLoad={() => <ToDoLoad />}
        filteredToDos={filteredToDos}
        onEmptyToDos={() => <EmptyToDos />}
        searchValue={searchValue}
        onEmptySearchResults={() => (
          <EmptySearchResults searchValue={searchValue} />
        )}
        /**
        La función render puede ser pasada cómo una propiedad en especifica o como prop.children
          render={(item) => (
            <ToDoItem
              key={filteredToDos.indexOf(item)}
              text={item.text}
              completed={item.completed}
              data_key={filteredToDos.indexOf(item)}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )} 
          */
      >
        {(item) => (
          <ToDoItem
            key={filteredToDos.indexOf(item)}
            text={item.text}
            completed={item.completed}
            data_key={filteredToDos.indexOf(item)}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )}
      </ToDoList>

      <ToDoAddButton
        openModal={openModal}
        toggleModal={toggleModal}
      ></ToDoAddButton>

      {!!openModal && (
        <Modal>
          <ModalCard>
            <p className="card__title">Set a new task!</p>
            <input
              value={newTodo}
              type="text"
              className="card__input"
              onChange={(event) => {
                setNewTodo(event.target.value);
              }}
            ></input>

            <div className="card__footer">

              <button
                className="btn btn-secondary"
                type="button"
                onClick={toggleModal}
              >Cancel</button>

              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  addNewTodo(newTodo);
                }}
              >Add</button>

            </div>
          </ModalCard>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
