import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ loading, searchValue, searchChanged }) {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={searchChanged}
        disabled = {loading}
      />
    </div>
  );
}
export { ToDoSearch };
