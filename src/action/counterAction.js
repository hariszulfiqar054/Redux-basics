export const increament = (value) => {
  return {
    type: "increase",
    payload: value,
  };
};

export const decreament = (value) => {
  return {
    type: "decrease",
    payload: value,
  };
};

export const isLogged = () => {
  return {
    type: "logged",
  };
};
