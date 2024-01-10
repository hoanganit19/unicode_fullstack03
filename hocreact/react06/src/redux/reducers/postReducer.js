const initialState = {
  postList: [],
  isLoading: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/fetch": {
      return { ...state, postList: action.payload, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
