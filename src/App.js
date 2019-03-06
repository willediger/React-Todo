import React from 'react';

import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        //example tasks:
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

  addTodo = () => {

  }

  clearCompletedTodos = () => {

  }

  toggleTodoCompletion = () => {

  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <Todo />
    );
  }
}

export default App;
