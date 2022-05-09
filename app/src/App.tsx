import React from 'react';
import './App.css';
import { todoApi } from './store';

const App = () => {
  const { data: todos } = todoApi.useGetAllQuery();

  return (
    <div className='App'>
      {JSON.stringify(todos)}
    </div>
  );
};

export default App;
