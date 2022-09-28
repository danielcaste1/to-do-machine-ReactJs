import { useEffect, useReducer } from "react";
import { reducer, initialState, actionTypes } from "./reducer";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { item, sincronizedItem, loading, error } = state;

  const onError = (error) =>
    dispatch({ type: actionTypes.ERROR, payload: error });
  const onSuccess = (parsedItem) =>
    dispatch({ type: actionTypes.SUCCESS, payload: parsedItem });
  const onSave = (newItem) =>
    dispatch({ type: actionTypes.SAVE, payload: newItem });
  const onSync = () => dispatch({ type: actionTypes.SYNC });

  useEffect(() => {
    try {
      setTimeout(() => {
        const storagedItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!storagedItem) {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }
        try {
          parsedItem = JSON.parse(storagedItem);
        } catch {
          parsedItem = initialValue;
        } finally {
          onSuccess(parsedItem);
        }
      }, 500);
    } catch (error) {
      onError(error);
    }
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const syncItem = () => {
    onSync();
  };

  return { item, saveItem, syncItem, loading, error };
}

export { useLocalStorage };
