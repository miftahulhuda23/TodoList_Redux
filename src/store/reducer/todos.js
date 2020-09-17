import * as actionTypes from "../action/actionTypes";

const initialState = [];
let countId = 0;

const addTodo = (state, payload) => {
  return [
    ...state,
    {
      id: countId++,
      Day: payload.Day,
      Activies: payload.Activies,
    },
  ];
};

const deleteItem = (state, payload) => {
  const updateArray = state.filter((item) => item.id !== payload);
  return updateArray;
};

const UpdateTodos = (state, payload) => {
  console.log(payload);
  const obj = {
    Id: payload.Id,
    Day: payload.values.Day,
    Activies: payload.values.Activies,
  };
  const index = state.findIndex((item) => {
    return item.id === obj.Id;
  });
  let newArr = [...state];
  newArr[index] = obj;
  return newArr;
};

const todos = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.ADD_TODOS:
      return addTodo(state, payload);
    case actionTypes.DELETE_TODOS:
      return deleteItem(state, payload);
    case actionTypes.UPDATE_TODOS:
      return UpdateTodos(state, payload);
    default:
      return state;
  }
};

export default todos;
