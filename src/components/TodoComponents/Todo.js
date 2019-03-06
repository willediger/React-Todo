import React from 'react';
import './Todo.css';

const Todo = props => (
  <li 
    className={props.completed ? 'completed': ''} 
    onClick={props.toggleTodoCompletion(props.id)}
  >
    {props.taskName}
  </li>
);


export default Todo