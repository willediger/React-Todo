import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => (
  <ul>
    {props.taskList.map(t => (
      <Todo
        completed={t.completed}
        taskName={t.taskName}
        toggleTodoCompletion={props.toggleTodoCompletion}
        id={t.id}
      />
    ))}
  </ul>
);


export default TodoList;