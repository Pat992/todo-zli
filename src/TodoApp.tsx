import React from 'react'
import { useLocation } from 'react-router-dom'

import AppLayout from './components/application/AppLayout'
import TodoHeader from './components/todo/TodoHeader'
import TodoPage from './components/todo/TodoPage'
import AboutPage from './components/about/About'
import NotFoundPage from './components/notFound/NotFound'
import todoDataInitHook from './model/todo_data_init_hook'

const TodoApp: React.FC = () => {
  // Get data from store
  todoDataInitHook()

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