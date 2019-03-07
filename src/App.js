import React from 'react';

import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: this.grabLocalStorageTaskList()
    }
  }

  grabLocalStorageTaskList = () => {
    const localStorageTaskList = localStorage.getItem('taskList')
    if (localStorageTaskList) {
      return JSON.parse(localStorageTaskList);
    }
    return [];
  }

  addTodo = taskName => e => {
    e.preventDefault();
    const task = {
      taskName: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState(prevState => {
      const newTaskList = [...prevState.taskList, task]
      localStorage.setItem('taskList', JSON.stringify(newTaskList));
      return {taskList: [...prevState.taskList, task]};
    });
  }

  toggleTodoCompletion = id => e => {
    this.setState(prevState => {
      let taskList = prevState.taskList;
      const idx = taskList.map(e => e.id).indexOf(id);
      taskList[idx].completed = !taskList[idx].completed;
      return {
        taskList: taskList
      }
    });
    localStorage.setItem('taskList', JSON.stringify(this.state.taskList));
  }

  clearCompletedTodos = e => {
    e.preventDefault();
    this.setState(prevState => {
      const updatedTaskList = prevState.taskList.filter(e => !e.completed);
      localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
      return {taskList: updatedTaskList}
    });
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <TodoForm 
          addTodo={this.addTodo} 
          clearCompletedTodos={this.clearCompletedTodos}
        />
        <TodoList 
          taskList={this.state.taskList}
          toggleTodoCompletion={this.toggleTodoCompletion}
        />
      </div>
    );
  }
}

export default App;
