import React from 'react';
import './Todo.css';

const Todo = props => (
  <li 
    className={props.task.completed ? 'completed': ''} 
    onClick={props.toggleTodoCompletion(props.task.id)}
  >
    {props.task.taskName}
  </li>
);


export default Todo