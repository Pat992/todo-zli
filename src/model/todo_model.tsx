import { Action, action } from 'easy-peasy'

import Todo from './Todo'
import todos from '../data/todo_data'

export interface TodoModel {
    todos: Todo[]

    // Actions
    initData: Action<TodoModel>
    delete: Action<TodoModel, Todo>
    toggleCompleted: Action<TodoModel, Todo>
    addTodo: Action<TodoModel, Todo>
}

const todoModel: TodoModel = {
    todos: todos,

    initData: action((state) => {
        state.todos = todos;
    }),

    delete: action((state, todo) => {
        state.todos = state.todos.filter(td => td.id !== todo.id)
    }),

    toggleCompleted: action((state, todo) => {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id === todo.id) {
                state.todos[i].completed = !state.todos[i].completed
            }
        }
    }),

    addTodo: action((state, todo) => {
        state.todos = [...state.todos, todo];
    })
}

export { todoModel }