import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => (
  <ul>
    {props.taskList.map(t => (
      <Todo
        task={t}
        toggleTodoCompletion={props.toggleTodoCompletion}
        key={t.id}
      />
    ))}
  </ul>
);


export default TodoList;