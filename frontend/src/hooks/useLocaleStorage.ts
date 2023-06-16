import { useCallback, useState } from "react";

const useLocaleStorage = <T>(key: string, intialState?: T) => {
  const [stored, setStored] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : intialState;
  });

  const setItem = useCallback(
    <T>(value: T) => {
      setStored(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return [stored, setItem] as [T, (data: T) => void];
};

export default useLocaleStorage;
