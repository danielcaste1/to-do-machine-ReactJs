import React from "react";

function EmptySearchResults({searchValue}){
    return (
        <p className="xdds"> No results found for { searchValue } </p>
    )
}

export { EmptySearchResults }