import * as actions from "../actionTypes";

const initialState = [];

function groceries(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_GROCERY:
      return [
        ...state,
        { ...action.payload, completed: false, id: state.length },
      ];
    case actions.DELETE_GROCERY:
      return state.filter((item) => item.id !== action.id);

    case actions.CHANGE_GROCERY_STATUS:
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              completed: !item.completed,
              history: [...(item.history || []), new Date()],
            }
          : item
      );

    default:
      return state;
  }
}

export default groceries;
