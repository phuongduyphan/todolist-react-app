import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'Go Shopping !',
    completed: true
  }, {
    id: v4(),
    text: 'Learn React !',
    completed: true
  }, {
    id: v4(),
    text: 'Learn Redux !',
    completed: true
  }, {
    id: v4(),
    text: 'Prepare Interview !',
    completed: true
  }, {
    id: v4(),
    text: 'Cooking',
    completed: true
  }, {
    id: v4(),
    text: 'Have Dinner',
    completed: true
  }, {
    id: v4(),
    text: 'Learn English',
    completed: false
  }, {
    id: v4(),
    text: 'Do Homework',
    completed: false
  }, {
    id: v4(),
    text: 'Send Email',
    completed: true
  }]
}

const delay = (ms) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => 
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(todo => !todo.completed);
      case 'completed': 
        return fakeDatabase.todos.filter(todo => todo.completed);
      default:
        throw new Error(`Unknown filter ${filter}`);
    }
  })