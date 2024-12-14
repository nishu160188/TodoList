import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
