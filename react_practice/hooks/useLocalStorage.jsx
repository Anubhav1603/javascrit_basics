import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
  );
  useEffect(() => localStorage.setItem(key, name));
  return [name, setName];
};
