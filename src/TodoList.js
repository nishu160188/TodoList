import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleComplete } from './store';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodo({ id, text }));
    setEditId(null);
    setEditText('');
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdateTodo(todo.id, editText)}>
                Update
              </button>
            </>
          ) : (
            <>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch(toggleComplete(todo.id))}
              >
                {todo.text}
              </span>
              <button onClick={() => { setEditId(todo.id); setEditText(todo.text); }}>
                Edit
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
