import React from "react";
import { useToDos } from "../Hooks/useToDos";
import { ToDoHeader } from "../Components/ToDoHeader";
import { ToDoTitle } from "../Components/ToDoTitle";
import { ToDoCounter } from "../Components/ToDoCounter";
import { ToDoSearch } from "../Components/ToDoSearch";
import { ToDoLoad } from "../Components/ToDoLoad";
import { ToDoList } from "../Components/ToDoList";
import { ToDoItem } from "../Components/ToDoItem";
import { ToDoAddButton } from "../Components/ToDoAddButton";
import { Modal } from "../Components/Modal";
import { ModalCard } from "../Components/ModalCard";
import { ToDoError } from "../Components/ToDoError";
import { EmptyToDos } from "../Components/EmptyToDos";
import { EmptySearchResults } from "../Components/EmptySearchResults";
import { AddContactCard } from "../Components/AddContactCard";
import { ChangeAlertWithStorageListener } from "../Components/ChangeAlert";
import { ChangeAlertCardWithStorageListener } from "../Components/ChangeAlertCard";
import { useModal } from "../Hooks/useModal";

function App() {
  const {
    state,
    stateUpdaters,
  } = useToDos();

  const {
    completedToDos,
    ToDos,
    loading,
    error,
    filteredToDos,
    searchValue,
    newTodo,
  } = state;

  const {
    syncTodos,
    searchChanged,
    toggleTodo,
    setNewTodo,
    addNewTodo,
    deleteTodo,
  } = stateUpdaters;

  const {
    openModal,
    toggleModal,
    showingModal,
    setShowingModal,
  } = useModal();

  return (
    <React.Fragment>
      <ToDoTitle/>
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
        sincronize={syncTodos}
        onLoad={() => <ToDoLoad />}
        filteredToDos={filteredToDos}
        onEmptyToDos={() => <EmptyToDos />}
        searchValue={searchValue}
        onEmptySearchResults={() => (
          <EmptySearchResults searchValue={searchValue} />
        )}
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
        setShowingModal={setShowingModal}
      ></ToDoAddButton>

      <Modal openModal={openModal}>
        <ModalCard>
          {showingModal === "addToDo" && (
            <AddContactCard
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              addNewTodo={addNewTodo}
              toggleModal={toggleModal}
            />
          )}
          {showingModal === "changeAlert" && (
            <ChangeAlertCardWithStorageListener
              toggleModal={toggleModal}
              sincronizeToDos={syncTodos}
              setShowingModal={setShowingModal}
            />
          )}
        </ModalCard>
      </Modal>

      <ChangeAlertWithStorageListener
        toggleModal={toggleModal}
        sincronizeToDos={syncTodos}
        setShowingModal={setShowingModal}
      />
    </React.Fragment>
  );
}
export default App;
