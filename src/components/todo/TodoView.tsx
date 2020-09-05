import React from 'react'
import TodoForm from './TodoForm'
import { TodoImpl } from '../../model/Todo'
import { useStoreActions, useStoreState } from '../../store/StoreModel'
import { Card, CardContent } from '@material-ui/core'

interface ITodoView { }
const TodoView: React.FC<ITodoView> = () => {

    const selectedTodo = useStoreState(state => state.todoModel.selectedTodo)

    const addTodo = useStoreActions(actions => actions.todoModel.addTodo)
    const editTodo = useStoreActions(actions => actions.todoModel.editTodo)

    return (
        <Card style={{ margin: "5px", padding: "5px" }}>
            <CardContent>
                <TodoForm
                    submitTxt="Add"
                    todo={new TodoImpl("")}
                    submitFunc={todo => { addTodo(todo) }}
                    resetAfterSubmit={true}
                />
                <TodoForm
                    submitTxt="Edit"
                    todo={selectedTodo !== undefined ? selectedTodo : new TodoImpl("")}
                    submitFunc={todo => { editTodo(todo) }}
                    resetAfterSubmit={false}
                />
            </CardContent>
        </Card>
    )
}

export default TodoView