import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({taskName: e.target.value})
  }

  onSubmit = e => {
    this.props.addTodo(this.state.taskName)(e);
    this.setState({taskName: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="taskName"
          value={this.state.taskName}
          placeholder="...todo" 
          onChange={this.inputChangeHandler} 
        />
        <button type="submit">add</button>
        <button type="button" onClick={this.props.clearCompletedTodos}>
          clear selected
        </button>
      </form>
    );
  }
} 


export default TodoForm;