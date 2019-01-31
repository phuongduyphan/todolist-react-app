import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all': 
      return todos;
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed': 
      return todos.filter(todo => todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const mapStateToProps = (state, ownProps) => (
  {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);