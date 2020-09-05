import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import { BrowserRouter } from 'react-router-dom'
// Needs to be imported to use the store
// else cannot use the data
import store from './store/StoreModel';
import { StoreProvider } from 'easy-peasy';

ReactDOM.render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);