const initialState = {
  weather: {
    content: [],
    loading: false,
  }, preference:{
    content:[]
  }
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
      case "ADD_PREF":
        return{
          ...state,
          preference:{
            content: [...state.preference.content,action.payload]
          }
        }
    default:
      return state;
  }
};

export default mainReducer;
