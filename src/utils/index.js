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
