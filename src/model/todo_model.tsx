import { Action, action } from 'easy-peasy'

import Todo from './Todo'
import todos from '../data/todo_data'
const shortid = require('shortid')

export interface TodoModel {
    todos: Todo[]
    selectedTodo: Todo | undefined

    // Actions
    initData: Action<TodoModel>
    delete: Action<TodoModel, Todo>
    toggleCompleted: Action<TodoModel, Todo>
    addTodo: Action<TodoModel, Todo>
    setSelectedTodo: Action<TodoModel, Todo>
    editTodo: Action<TodoModel, Todo>
}

const todoModel: TodoModel = {
    todos: todos,
    selectedTodo: undefined,

    initData: action((state) => {
        state.todos = todos;
    }),

    delete: action((state, todo) => {
        state.todos = state.todos.filter(td => td.id !== todo.id)
    }),

    toggleCompleted: action((state, todo) => {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id === todo.id) {
                todo.completed = !todo.completed
                state.todos[i] = { ...todo } // Copy
            }
        }
    }),

    addTodo: action((state, todo) => {
        todo.id = Math.random()
        todo.id = shortid()
        //state.todos.push(todo)
        state.todos = [{ ...todo }, ...state.todos];
    }),

    setSelectedTodo: action((state, todo) => {
        state.selectedTodo = { ...todo }
    }),

    editTodo: action((state, todo) => {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id === todo.id) {
                state.todos[i] = { ...todo } // update via Copy
            }
        }
    })
}

export { todoModel }