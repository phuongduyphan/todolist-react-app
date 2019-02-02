import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import FetchError from '../components/FetchError';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';
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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { isFetching, errorMessage, todos, toggleTodo } = this.props;
    if (isFetching && !todos.length) {
      return (
        <div className="loader-container">
          <BounceLoader color={'#36D7B7'}></BounceLoader>
        </div>
      )
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
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
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;