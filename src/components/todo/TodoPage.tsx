import React from 'react'
import TodoContent from './TodoContent'
import { useStoreState } from '../../store/StoreModel'
import { Typography } from '@material-ui/core'

const TodoPage: React.FC = () => {
    const todoAmount = useStoreState(state => state.todoModel.jobsTodo)
    let msg = null

    switch (todoAmount) {
        case 0:
            msg = <Typography variant="h2">No ToDo's to do</Typography>
            break;
        case 1:
            msg = <Typography variant="h2">1 ToDo to do</Typography>
            break;
        default:
            msg = <Typography variant="h2">{todoAmount} ToDo's to do</Typography>
    }
    return <>
        {msg}
        <TodoContent />
    </>
}

export default TodoPage
