import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const getItem = (key: string, initialValue: T) => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const unparsedValue = window.localStorage[key];
        if (typeof unparsedValue === "undefined") {
          return initialValue;
        }
        return JSON.parse(unparsedValue);
      } catch (error) {
        return initialValue;
      }
    };
    setValue(getItem(key, initialValue));
  }, [key, initialValue]);

  const setItem = (newValue: T) => {
    setValue(newValue);
    window.localStorage[key] = JSON.stringify(newValue);
  };

  return [value, setItem];
}
