import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Try to learn react',
        completed: false
      },
      {
        id: 2,
        title: 'Learn Laravel Again',
        completed: false
      },
      {
        id: 3,
        title: 'Buy some groceries',
        completed: false
      }
    ]
  }

  // Toggle a task
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;
      })
    });
  }

  // Delete Todo

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id!==id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
