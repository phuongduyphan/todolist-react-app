import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
import './Todo.css';

const Todo = ({ onClick, completed, text }) => {
  // <li
  //   onClick={onClick}
  //   // style={{
  //   //   textDecoration: completed ? 'line-through' : 'none'
  //   // }}
  // >
  //   {text}
  // </li>

  let url = checkImg;
  if (completed) {
    url = checkCompleteImg;
  }

  return (
    <div className={classNames('Todo', {
      'Todo-completed': completed
    })}>
      <img src={url} width={32} height={32} onClick={onClick} />
      <p>{text}</p>
    </div>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;