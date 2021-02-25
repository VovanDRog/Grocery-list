import * as actionTypes from "../actionTypes";

export const addGrocery = (payload) => ({
  type: actionTypes.ADD_GROCERY,
  payload,
});

export const deleteGrocery = (id) => ({
  type: actionTypes.DELETE_GROCERY,
  id,
});

export const changeGroceryStatus = (id) => ({
  type: actionTypes.CHANGE_GROCERY_STATUS,
  id,
});

export const setFilter = payload => ({ type: actionTypes.SET_FILTER, payload });
