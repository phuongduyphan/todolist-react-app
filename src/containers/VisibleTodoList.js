import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match: { params } }) => (
  {
    todos: getVisibleTodos(state, params.filter || 'all')
  }
);

export default withRouter(connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList));