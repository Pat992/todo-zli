import React from 'react'
import { List } from '@material-ui/core'
import TodoListItem from './TodoListItem'
// import todos from '../../data/todo_data'
import Todo from '../../model/Todo'
import { useStoreState, useStoreActions } from '../../store/StoreModel'

const TodoList: React.FC = () => {
    const todos = useStoreState(state => state.todoModel.todos)

    return (
        <List>
            {todos.map((item: Todo) => (
                <TodoListItem
                    key={item.id}
                    todo={item}
                />
            ))}
        </List>
    )
}

export default TodoList
