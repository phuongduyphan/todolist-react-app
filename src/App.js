import React, { Component } from 'react';
import logo from './logo.svg';
import tick from './img/tick.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Go Shopping', isComplete: false },
        { title: 'Play Football', isComplete: false },
        { title: 'Have dinner', isComplete: false },
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

  onKeyUp = (event) => {
    if (event.keyCode === 13) { // enter key
      let text = event.target.value;
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange = (event) => {
    let text = event.target.value;
    this.setState({
      newItem: text
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input
            type="text"
            placeholder="What needs to be done?"
            value={this.state.newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
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
