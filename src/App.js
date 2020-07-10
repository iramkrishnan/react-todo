import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
