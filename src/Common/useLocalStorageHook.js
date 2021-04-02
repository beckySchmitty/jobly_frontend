import { useState, useEffect } from "react";

// Custom hook for keeping state synced with localStorage to keep track of token
// If "item" chanages, then effect re-runs


function useLocalStorage(key, firstVal = null) {

  const initialVal = localStorage.getItem(key) || firstVal;
  const [item, setItem] = useState(initialVal);

  useEffect(function setLocalStorageKey() {
    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
