import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
  render() {
    let { item } = this.props;
    let url = checkImg;
    if (item.isComplete) {
      url = checkCompleteImg;
    }

    return (
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img src={url} width={32} height={32} onClick={this.props.onItemClicked} />
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;