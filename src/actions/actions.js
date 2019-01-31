import { v4 } from 'node-uuid';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// action creators

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: v4(),
    text
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}
