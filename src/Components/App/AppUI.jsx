import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoAddButton } from "../ToDoAddButton";
import { Modal } from "../Modal";
import { ModalCard } from "../ModalCard";

function AppUI() {
  const {
    loading,
    filteredToDos,
    error,
    toggleTodo,
    deleteTodo,
    ToDos,
    newTodo,
    setNewTodo,
    addNewTodo,
    openModal,
    toggleModal,
  } = useContext(AppContext);
  return (
    <React.Fragment>
      <ToDoTitle />
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {loading && (
          <p className="loading">
            <i className="fa-solid fa-circle-notch"></i>
          </p>
        )}
        {!loading && !ToDos.length && (
          <p>Add your first task with the + icon</p>
        )}
        {!loading && error && <p>Oops! Something wrong just ocurred </p>}
        {filteredToDos.map((item) => {
          return (
            <ToDoItem
              key={filteredToDos.indexOf(item)}
              text={item.text}
              completed={item.completed}
              data_key={filteredToDos.indexOf(item)}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ToDoList>

      <ToDoAddButton />
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
              onClick={()=>toggleModal()}>
                Cancel
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  addNewTodo(newTodo);
                }}
              >
                Add
              </button>
            </div>
          </ModalCard>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
