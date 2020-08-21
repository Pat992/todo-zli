import React from 'react'
import { useLocation } from 'react-router-dom'

import AppLayout from './components/application/AppLayout'
import TodoHeader from './components/todo/TodoHeader'
import TodoPage from './components/todo/TodoBody'
import AboutPage from './components/about/About'
import NotFoundPage from './components/notFound/NotFound'

function TodoApp() {
  let body = <NotFoundPage />;

  switch (useLocation().pathname) {
    case '/':
    case '/todo': body = <TodoPage />
      break
    case '/about': body = <AboutPage />
      break
  }

  return (
    <AppLayout header={<TodoHeader />} body={body} />
  );
}

export default TodoApp;