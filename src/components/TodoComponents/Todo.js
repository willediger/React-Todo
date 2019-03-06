import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Todo = props => (
  <>
    <TodoList taskList={props.taskList}/>
    <TodoForm addTodo={props.addTodo}/>
  </>
);


export default Todo