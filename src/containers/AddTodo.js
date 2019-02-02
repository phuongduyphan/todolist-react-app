import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import tick from '../img/tick.svg';
import './AddTodo.css';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        className="Header"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <img src={tick} width={32} height={32} />
        <input
          ref={node => (input = node)} 
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  )
}

export default connect()(AddTodo);