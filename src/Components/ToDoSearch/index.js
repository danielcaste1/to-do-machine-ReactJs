import React, { useContext } from "react";
import "./ToDoSearch.css";
import { AppContext } from "../../Context";

function ToDoSearch() {
  const { searchValue, searchChanged } = useContext(AppContext);
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={searchChanged}
      />
    </div>
  );
}
export { ToDoSearch };
