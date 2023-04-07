const initialState = {
  weather: {
    content: [],
    loading: false,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        weather: {
          content: [action.payload],
          loading: true,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
