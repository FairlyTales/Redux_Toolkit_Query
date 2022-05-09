import React from 'react';
import './App.css';
import { Todo, todoApi } from './store';

const App = () => {
  const { data: todos } = todoApi.useGetAllQuery();
  const [updateTodo] = todoApi.useUpdateTodoMutation();

  const handleToggle = (todo: Todo) => updateTodo({
    ...todo,
    done: !todo.done,
  });

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
            <button>Delete</button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
