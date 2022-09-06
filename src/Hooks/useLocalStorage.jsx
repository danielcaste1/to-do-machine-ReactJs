import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const storagedItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!storagedItem) {
          parsedItem = [];
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          try {
            parsedItem = JSON.parse(storagedItem);
          } catch {
            parsedItem = [];
          }
        }
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      }, 1000);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const sincronizeItem = ()=>{
    setLoading(true);
    setSincronizedItem(false);
  }

  return { item, saveItem, sincronizeItem, loading, error };
}

export { useLocalStorage };
