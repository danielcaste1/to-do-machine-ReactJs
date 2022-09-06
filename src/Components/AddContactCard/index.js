import React, { Fragment } from "react";

function AddContactCard({newTodo, setNewTodo, addNewTodo, toggleModal}) {
  
  return (
    <Fragment>
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
        >
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
    </Fragment>
  );
}

export { AddContactCard };
