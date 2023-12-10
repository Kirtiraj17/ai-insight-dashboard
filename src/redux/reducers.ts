const initialState = {
  data: {},
};

type Action = {
  type: string;
  payload: any;
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
