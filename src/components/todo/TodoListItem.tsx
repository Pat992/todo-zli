import React, { useState } from 'react'
import { ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import { Delete, DeleteOutline } from '@material-ui/icons'
import Todo from '../../model/Todo'
import Snackbar from '../ui/Snakbar'
import { useStoreActions } from '../../store/StoreModel'

interface ITodoListItem {
    todo: Todo;
}
const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
    const [trash, setTrash] = useState(<DeleteOutline />)
    const [showSnack, setShowSnack] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')

    const toggleComplete = useStoreActions(actions => actions.todoModel.toggleCompleted)
    const deleteTodo = useStoreActions(actions => actions.todoModel.delete)

    return (
        <ListItem>
            <Snackbar message={snackMessage} severity="success" open={showSnack} close={setShowSnack} />
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableFocusRipple
                    onClick={() => {
                        toggleComplete(todo)
                    }}
                />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    onMouseEnter={() => setTrash(<Delete />)}
                    onMouseLeave={() => setTrash(<DeleteOutline />)}
                    onClick={() => {
                        deleteTodo(todo)
                    }}
                >
                    {trash}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem
