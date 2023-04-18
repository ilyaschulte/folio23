// hooks/useDebounced.js
import { useRef } from "react";

const useDebounced = (callback, delay) => {
  const debounceRef = useRef(null);

  const debouncedCallback = (...args) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounced;
