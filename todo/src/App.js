import React, { Component } from 'react';

import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;
