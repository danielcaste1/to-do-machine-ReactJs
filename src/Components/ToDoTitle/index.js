import React, {useContext} from "react";
import "./ToDoTitle.css"
import { AppContext } from "../../Context";

function ToDoTitle (){

    const {appTitle} = useContext(AppContext);

    return(
        <h1 className="app-title">
            { appTitle }
        </h1>
    )
}

export { ToDoTitle };