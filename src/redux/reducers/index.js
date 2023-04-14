const initialState = {
  weather: {
    content: [],
    loading: false,
  }, preference:{
    content:{
      singlePreference:[],
      selected : false,
    }
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
            content: {
              singlePreference:[...state.preference.content.singlePreference,action.payload],
              selected : true,}
          }
        };
        case "REMOVE":
          return {
          ...state,
          preference:{
            content:{
              singlePreference:[...state.preference.content.singlePreference.filter((el, i) => i !== action.payload)],
              selected : false
            },
          }
          }
    default:
      return state;
  }
};

export default mainReducer;
