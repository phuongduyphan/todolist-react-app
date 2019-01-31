import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import './App.css';

const App = ({ match }) => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || 'all'} />
    <Footer />
  </div>
);

export default App;