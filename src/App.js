import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        // {
        //   task: 'Organize Garage',
        //   id: 1528817077286,
        //   completed: false
        // },
        // {
        //   task: 'Bake Cookies',
        //   id: 1528817084358,
        //   completed: false
        // }

      ]
    }
  }

  addTodo = taskName => e => {
    e.preventDefault();
    const task = {
      taskName: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState(prevState => ({taskList: [...prevState.taskList, task]}));
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
  }

  clearCompletedTodos = e => {
    e.preventDefault();
    this.setState(prevState => ({taskList: prevState.taskList.filter(e => !e.completed)}));
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.taskList);
    return (
      <>
        <TodoForm 
          addTodo={this.addTodo} 
          clearCompletedTodos={this.clearCompletedTodos}
        />
        <TodoList 
          taskList={this.state.taskList}
          toggleTodoCompletion={this.toggleTodoCompletion}
        />
      </>
    );
  }
}

export default App;
