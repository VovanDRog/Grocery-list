import * as actions from "../actionTypes";

const initialState = "all";

function filter(state = initialState, action) {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
}

export default filter;
