// Here we will Define The Actions what need to be used in our app

export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetNumber = () => {
  return {
    type: "RESET",
  };
};
