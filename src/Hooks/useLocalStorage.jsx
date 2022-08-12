import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    React.useEffect(()=>{
      try {
        setTimeout(()=>{
          const storagedItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!storagedItem){
            parsedItem = []
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          }else{
            parsedItem = JSON.parse(storagedItem)
          }
          setItem(parsedItem);
          setLoading(false);
        }, 1000)
      } catch (error) {
        setError(true);
      }
    }, [item])

    const saveItem = (newItem)=>{
      try {
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      } catch (error) {
        setError(true);
      }
    };
  
    return {item, saveItem, loading, error}
}

export { useLocalStorage }