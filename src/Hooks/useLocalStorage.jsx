import React from "react";

function useLocalStorage(itemName, initialValue) {

    const storagedItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!storagedItem){
      parsedItem = []
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }else{
      parsedItem = JSON.parse(storagedItem)
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem)=>{
      const stringifiedItem = localStorage.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    return [item, saveItem]
}

export { useLocalStorage }