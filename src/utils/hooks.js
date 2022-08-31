import { useEffect, useState } from 'react';

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};
