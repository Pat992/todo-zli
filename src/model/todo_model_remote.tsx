import { Computed, computed, Thunk, thunk, Action, action } from 'easy-peasy'

import Todo from './Todo'
import todos from '../data/todo_data'
import { TodoService, todoService } from '../service/todoService'

export interface TodoModelRemote {
    // States
    // Store variables
    todos: Todo[]
    selectedTodo: Todo | undefined

    // Computed
    // Returns certain value after calculation
    jobsTodo: Computed<TodoModelRemote, number>

    // Thunk
    // Does something first and then works on model
    initData: Thunk<TodoModelRemote>
    delete: Thunk<TodoModelRemote, Todo>
    toggleCompleted: Thunk<TodoModelRemote, Todo>
    addTodo: Thunk<TodoModelRemote, Todo>
    editTodo: Thunk<TodoModelRemote, Todo>

    // Actions
    _addTodo: Action<TodoModelRemote, Todo>
    _delete: Action<TodoModelRemote, Todo>
    _toggle: Action<TodoModelRemote, Todo>
    _setSelectedTodo: Action<TodoModelRemote, Todo>
}

const TodoModelImpl: TodoModelRemote = {
    todos: todos,
    selectedTodo: undefined,

    initData: thunk(async (actions) => {
        return null
    }),

    addTodo: thunk(async (actions, todo: Todo) => {
        todoService.addTodo(todo).then(() => actions._addTodo(todo))
    }),

    editTodo: thunk(async (actions, todo: Todo) => {

    }),

    toggleCompleted: thunk(async (actions, todo: Todo) => {
        todoService.modifyTodo(todo).then(() => {
            actions._toggle(todo)
        })
    }),

    delete: thunk(async (actions, todo: Todo) => {
        // Call service and wait for result
        todoService.deleteTodo(todo).then(() => {
            actions._delete(todo)
        }).catch((e) => { })
        // Then delete locally or send error
    }),

    _addTodo: action((state, todo: Todo) => {

    }),

    _setSelectedTodo: action((state, todo: Todo) => {
        state.selectedTodo = { ...todo }
    }),

    jobsTodo: computed((state) => {
        return state.todos.reduce((prev, todo: Todo) => prev + (todo.completed ? 0 : 1), 0)
    }),

    _delete: action((state, todo: Todo) => {

    }),

    _toggle: action((state, todo: Todo) => {

    })
}

// class TodoModelImpl implements TodoModelRemote {
//     todos: Todo[]
//     selectedTodo: Todo | undefined

//     constructor() {
//         this.todos = []
//     }

//     initData = thunk(async (actions) => {

//     })

//     addTodo = thunk(async (actions, todo: Todo) => {
//         return null
//     })

//     editTodo = thunk(async (actions, todo: Todo) => {

//     })

//     toggleCompleted = thunk(async (actions, todo: Todo) => {

//     })

//     delete = thunk(async (actions, todo: Todo) => {
//         // Call service and wait for result
//         // Then delete locally or send error
//         this._delete(todo)
//     })

//     setSelectedTodo = thunk(async (actions, todo: Todo) => {
//         this.selectedTodo = { ...todo }
//     })

//     jobsTodo = computed(() => {
//         return this.todos.reduce((prev, todo: Todo) => prev + (todo.completed ? 0 : 1), 0)
//     })

//     _delete = action((actions, todo: Todo) => {

//     })

//     _toggle = action((state, todo) => {

//     })
// }


export { TodoModelImpl }