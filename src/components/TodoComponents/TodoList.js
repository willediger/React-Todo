import React from 'react';

const TodoList = props => (
  <ul>
    {props.taskList.map(t => (
      <li className={t.completed ? t.completed : 'incomplete'}>{t.taskName}</li>
    ))}
  </ul>
);


export default TodoList;