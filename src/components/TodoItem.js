import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
  render() {
    let { item } = this.props;
    
    return (
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })} onClick={this.props.onItemClicked}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;