export const isFalsy = (val: unknown) => {
  return val === 0 ? false : !val;
};

export const isVoid = (val: unknown) => {
  return val === undefined || val === null || val === '';
};

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    if (isVoid(result[key])) {
      delete result[key];
    }
  });
  return result;
};

export const debounce = (fn: () => void, delay?: number) => {
  let timer: null | NodeJS.Timeout = null;
  return (...args: []) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay || 1000);
  };
};
