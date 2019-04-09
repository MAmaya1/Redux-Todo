import React, { Component } from 'react';

import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';

import styled from 'styled-components';

// Styled Components

const AppWrapper = styled.div`
  width: 700px;
  margin: auto;
  padding: 20px;
  height: 90vh;
  background: white;

  h1 {
    margin: 0;
  }
`

// App Constructor

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>To Do List</h1>
        <TodoList/>
        <AddItemForm/>
      </AppWrapper>
    );
  }
}

export default App;
