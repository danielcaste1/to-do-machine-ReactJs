import React from "react";

function ToDoHeader({loading, children}) {
  return (
    <header>
        { React.Children
          .toArray(children).map(child => React.cloneElement(child, { loading: loading }))}
    </header>
  );
}

export { ToDoHeader }