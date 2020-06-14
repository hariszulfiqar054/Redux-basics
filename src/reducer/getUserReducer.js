const { act } = require("react-dom/test-utils");

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const GetUser = (state = initialState, action) => {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "isError": {
      return {
        ...state,
        isLoading: false,
        error: action.pyload,
      };
    }
    case "fetched": {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

export default GetUser;
