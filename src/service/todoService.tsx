import Todo from '../model/Todo'
import axios from 'axios'
import todos from '../data/todo_data'
import { resolve } from 'dns'

const http = axios.create({
    baseURL: "https://react-todo-af77d.firebaseio.com/todos",
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control': 'Allow-Origin'
    }
})

export interface TodoService {
    loadTodos(): Promise<Todo[]>
    addTodo(todo: Todo): Promise<Todo>
    modifyTodo(todo: Todo): Promise<Todo>
    deleteTodo(todo: Todo): Promise<void>
}

async function callForData<R>(httpFunc: any, uri: string, params?: any) {
    return new Promise<R>((resolve, reject) => {
        httpFunc(uri, params)
            .then((response: any) => resolve(response.data))
            .catch((error: any) => reject(error))
    })
}

class TodoServiceImpl implements TodoService {
    loadTodos(): Promise<Todo[]> {
        return callForData(http.get, '.json')
    }
    addTodo(todo: Todo): Promise<Todo> {
        return callForData(http.post, `.json`, todo)
    }
    modifyTodo(todo: Todo): Promise<Todo> {
        return callForData(http.put, `/${todo.id}.json`, todo)
    }
    deleteTodo(todo: Todo): Promise<void> {
        return callForData(http.delete, `/${todo.id}.json`, todo)
    }
}

export const todoService = new TodoServiceImpl()