import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 300): T => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  });

  return debounceValue;
};
