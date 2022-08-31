const isFalsy = (val) => {
  return val === 0 ? false : !val;
};

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    if (isFalsy(result[key])) {
      delete result[key];
    }
  });
  return result;
};

export const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay || 1000);
  };
};
