import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { todoApi } from './store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApiProvider api={todoApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
);
