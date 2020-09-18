import { Computed, computed, Action, action, Thunk, ThunkCreator, thunk } from 'easy-peasy'

import Todo, { TodoImpl } from './Todo'
import todos from '../data/todo_data'
import { todoService } from '../service/todoService'
const shortid = require('shortid')

export interface TodoModel {
    // States
    // Store variables
    todos: Todo[]
    selectedTodo: Todo | undefined

    // Computed
    // Returns certain value after calculation
    jobsTodo: Computed<TodoModel, number>

    // thunk
    // Modify store-variables
    initData: Thunk<TodoModel>
    delete: Thunk<TodoModel, Todo>
    toggleCompleted: Thunk<TodoModel, Todo>
    addTodo: Thunk<TodoModel, Todo>
    editTodo: Thunk<TodoModel, Todo>

    // Actions
    _initTodo: Action<TodoModel, Todo[]>
    _addTodo: Action<TodoModel, Todo>
    _delete: Action<TodoModel, Todo>
    _toggle: Action<TodoModel, Todo>
    _editTodo: Action<TodoModel, Todo>
    _setSelectedTodo: Action<TodoModel, Todo>
}

const todoModel: TodoModel = {
    todos: [],
    selectedTodo: undefined,

    initData: thunk(async (actions) => {
        todoService.loadTodos().then((data) => {
            actions._initTodo(data)
        });
    }),

    _initTodo: action((state, todos: Todo[]) => {
        //state.todos = todos
        for (const [key, val] of Object.entries(todos)) {
            state.todos = [{
                id: key,
                title: val.title,
                completed: val.completed
            }, ...state.todos]
        }
    }),

    delete: thunk(async (actions, todo) => {
        todoService.deleteTodo(todo).then(() => {
            actions._delete(todo)
        })
    }),

    _delete: action((state, todo) => {
        state.todos = state.todos.filter(td => td.id !== todo.id)
        if (state.selectedTodo && state.selectedTodo.id === todo.id) state.selectedTodo = undefined;
    }),

    toggleCompleted: thunk(async (actions, todo) => {
        todoService.modifyTodo(todo).then(() => {
            actions._toggle(todo)
        })
    }),

    _toggle: action((state, todo) => {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id === todo.id) {
                todo.completed = !todo.completed
                state.todos[i] = { ...todo } // Copy
            }
        }
    }),

    addTodo: thunk(async (actions, todo) => {
        todo.id = Math.random()
        todo.id = shortid()
        todoService.addTodo(todo).then(() => {
            actions._addTodo(todo)
        })
    }),

    _addTodo: action((state, todo) => {
        //state.todos.push(todo)
        state.todos = [{ ...todo }, ...state.todos];
    }),

    _setSelectedTodo: action((state, todo) => {
        state.selectedTodo = { ...todo }
    }),

    editTodo: thunk(async (actions, todo) => {
        todoService.modifyTodo(todo).then(() => {
            actions._editTodo(todo)
        })
    }),

    _editTodo: action((state, todo) => {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id === todo.id) {
                state.todos[i] = { ...todo } // update via Copy
            }
        }
        state.selectedTodo = undefined
    }),

    jobsTodo: computed((state) => {
        // let res = 0;
        // for(let i = 0; i < state.todos.length; ++i) {
        //     if(!state.todos[i].completed) {++i}
        // }
        // return res

        return state.todos.reduce((prev, todo: Todo) => prev + (todo.completed ? 0 : 1), 0)
    })
}

export { todoModel }