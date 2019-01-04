import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Go Shopping' },
        { title: 'Play Football' },
        { title: 'Have dinner' },
      ]
    }
  }

  onItemClicked = (item) => (event) => {
    const { isComplete } = item;
    const { todoItems } = this.state;
    const index = todoItems.indexOf(item);
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoItems.slice(index + 1)
      ]
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
            <TodoItem
              key={index} 
              item={item} 
              onItemClicked={this.onItemClicked(item)} />
          )
        }
        {
          this.state.todoItems.length === 0 && 'Nothing here.'
        }
      </div>
    );
  }
}

export default App;
