import { v4 } from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// action creators

export const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
});

export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));
  
  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response));
  });
}

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: v4(),
    text
  };
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
}
