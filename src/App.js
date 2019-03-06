import React from 'react';

import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
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

  clearCompletedTodos = e => {

  }

  toggleTodoCompletion = e => {

  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.taskList);
    return (
      <Todo addTodo={this.addTodo} clearCompletedTodos={this.clearCompletedTodos} taskList={this.state.taskList}/>
    );
  }
}

export default App;
