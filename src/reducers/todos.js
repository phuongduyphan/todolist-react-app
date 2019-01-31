import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions/actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    default: 
      return state;
  }
}

export default todos;

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'active':
      return state.filter(todo => !todo.completed);
    case 'completed':
      return state.filter(todo => todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};