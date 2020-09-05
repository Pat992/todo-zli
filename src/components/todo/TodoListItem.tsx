import React, { useState } from 'react'
import { ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import { Delete, DeleteOutline, CallToActionSharp } from '@material-ui/icons'
import Todo from '../../model/Todo'
import Snackbar from '../ui/Snakbar'
// once again use StoreModel actions and not the one from easy-peasy
import { useStoreActions } from '../../store/StoreModel'

interface ITodoListItem {
    todo: Todo;
}
const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
    const [trash, setTrash] = useState(<DeleteOutline />)
    const [showSnack, setShowSnack] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')

    // Call an action from store to use some functinality
    const toggleComplete = useStoreActions(actions => actions.todoModel.toggleCompleted)
    const deleteTodo = useStoreActions(actions => actions.todoModel.delete)
    const selectTodo = useStoreActions(actions => actions.todoModel.setSelectedTodo)

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
            <ListItemText primary={todo.title} onClick={() => selectTodo(todo)} style={{ cursor: 'pointer' }} />
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
