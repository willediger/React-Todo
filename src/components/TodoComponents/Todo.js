import React from 'react';
import './Todo.css';

const Todo = props => (
  <div 
    className={props.task.completed ? 'completed item': 'item'} 
    onClick={props.toggleTodoCompletion(props.task.id)}
  >
    {props.task.taskName}
  </div>
);


export default Todo