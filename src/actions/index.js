import { v4 } from 'node-uuid';
import * as api from '../api';

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

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );

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
