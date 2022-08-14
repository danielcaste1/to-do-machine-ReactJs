import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";

function Modal ({children}){
    return ReactDOM.createPortal(
        children,
        document.querySelector("#modal")
    )
}

export { Modal }