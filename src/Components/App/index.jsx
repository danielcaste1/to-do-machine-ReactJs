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
import { AddContactCard } from "../AddContactCard";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";
import { ChangeAlertCardWithStorageListener } from "../ChangeAlertCard";

function App() {
  const {
    appTitle,
    completedToDos,
    ToDos,
    sincronizeToDos,
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
    showingModal,
    setShowingModal,
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
        sincronize={sincronizeToDos}
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
        setShowingModal={setShowingModal}
      ></ToDoAddButton>

      <Modal openModal={openModal}>
        <ModalCard>
          {showingModal === "addToDo" && 
            <AddContactCard 
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            addNewTodo={addNewTodo}
            toggleModal={toggleModal}
            />
          }  
          {showingModal === "changeAlert" && 
            <ChangeAlertCardWithStorageListener 
              toggleModal={toggleModal}
              sincronizeToDos={sincronizeToDos}
              setShowingModal={setShowingModal}
            />
          }  
        </ModalCard>
      </Modal>

      <ChangeAlertWithStorageListener
        toggleModal={toggleModal}
        sincronizeToDos={sincronizeToDos}
        setShowingModal={setShowingModal}
      />
    </React.Fragment>
  );
}
export default App;
