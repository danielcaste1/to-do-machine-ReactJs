import React, { useState } from "react";
function withStorageListener(WrappedComponent){
    
    
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false);

        //listens for changes in localStorage, the argument of the next function passes the changes as argument.
        window.addEventListener('storage', (change)=> {
            //If the key that changed is toDoList
            if(change.key === 'toDoList'){
                setStorageChange(change);
                props.toggleModal();
                props.setShowingModal("changeAlert");
            }
        })
        
        const toggleShow = ()=>{
            setStorageChange(false);
            props.sincronizeToDos();
            props.toggleModal();
        }

        return (
            <WrappedComponent
                {...props}
                show = { storageChange }
                toggleShow = { toggleShow }
            />
        )
    }
}

export { withStorageListener }