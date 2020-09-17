import * as actionTypes from "./actionTypes";

export const addTodos = (values) => {
  return { type: actionTypes.ADD_TODOS, payload: values };
};

export const DeleteTodos = (id) => {
  return {
    type: actionTypes.DELETE_TODOS,
    payload: id,
  };
};

export const UpdateTodos = (values) => {
  return {
    type: actionTypes.UPDATE_TODOS,
    payload: values,
  };
};
