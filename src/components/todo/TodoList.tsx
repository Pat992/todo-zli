import React from 'react'
import { List } from '@material-ui/core'
import TodoListItem from './TodoListItem'
// import todos from '../../data/todo_data'
import Todo from '../../model/Todo'
// the exported actions, not from easy-peasy but from created StoreModel
import { useStoreState } from '../../store/StoreModel'

const TodoList: React.FC = () => {
    // get state of store, therefore get the data
    const todos = useStoreState(state => state.todoModel.todos)
    console.log(todos)
    return (
        <List>
            {todos ? todos.map((item: Todo) => (
                <TodoListItem
                    key={item.id}
                    todo={item}
                />
            )) : null}
        </List>
    )
}

export default TodoList
