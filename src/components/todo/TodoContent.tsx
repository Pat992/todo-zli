import React from 'react'
import { Grid } from '@material-ui/core'
import TodoList from './TodoList'
import TodoView from './TodoView'

const TodoContent: React.FC = () => {
    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={12} sm={4}>
                <TodoList />
            </Grid>
            <Grid item xs={12} sm={8}>
                <TodoView />
            </Grid>
        </Grid>
    )
}

export default TodoContent
