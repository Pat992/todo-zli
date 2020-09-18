import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import { BrowserRouter } from 'react-router-dom'
// Needs to be imported to use the store
// else cannot use the data
import store from './store/StoreModel';
import { StoreProvider } from 'easy-peasy';
import theme from './theme/theme'
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <TodoApp />
        </BrowserRouter>
      </React.StrictMode>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root')
);