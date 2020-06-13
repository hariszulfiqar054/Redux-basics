const initialState = {
  counter: 0,
  isLogged: false,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case "decrease": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "logged": {
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    }
    default:
      return state;
  }
};

export default CounterReducer;
