import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos, getIsFetching } from '../reducers';
import './spinner.css';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos, requestTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render() {
    const { isFetching, todos, toggleTodo } = this.props;
    if (isFetching && !todos.length) {
      return (
        <div className="loader-container">
          <BounceLoader color={'#36D7B7'}></BounceLoader>
        </div>
      )
    }

    return (
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;