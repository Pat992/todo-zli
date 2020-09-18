import { createStore, createTypedHooks } from 'easy-peasy'
import { TodoModel, todoModel } from '../model/todo_model'

// StoreModel may contain several Models
interface StoreModel {
    todoModel: TodoModel;
}

// Create the store 
const store = createStore<StoreModel>({
    todoModel: todoModel
})

export default store

// Create typed hooks to interact with the store
// This is boilerplate code to create typescript information
const {
    useStoreActions,
    useStoreDispatch,
    useStoreState
} = createTypedHooks<StoreModel>()

export { useStoreActions, useStoreDispatch, useStoreState }