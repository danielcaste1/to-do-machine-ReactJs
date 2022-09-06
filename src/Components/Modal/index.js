import ReactDOM from 'react-dom';
import "./index.css";

function Modal ({openModal, children}){
    if(!!openModal){
        return ReactDOM.createPortal(
            children,
            document.querySelector("#modal")
        )
    }else{
        return null
    }
}

export { Modal }