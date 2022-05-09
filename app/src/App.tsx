import React, { useState } from 'react';
import './App.css';
import { Todo, todoApi } from './store';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { data: todos } = todoApi.useGetTodosQuery();
  const [updateTodo] = todoApi.useUpdateTodoMutation();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();
  const [addTodo] = todoApi.useAddTodoMutation();

  const handleToggle = (todo: Todo) => updateTodo({
    ...todo,
    done: !todo.done,
  });

  const handleDelete = (todo: Todo) => deleteTodo(todo);

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className='App'>
      <div className='todos'>
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <div className='container'>
              <input
                type='checkbox'
                checked={todo.done}
                onChange={() => handleToggle(todo)}
                id={`id-${todo.id}`}
                name={`id-${todo.text}`}
              />
              <label htmlFor={`id-${todo.id}`}>{todo.text}</label>
            </div>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </React.Fragment>
        ))}
      </div>
      <div className='add'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default App;
