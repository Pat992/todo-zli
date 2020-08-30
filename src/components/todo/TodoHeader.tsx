import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TodoHeader: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>TODO-APP</Typography>
                <Button
                    color="inherit"
                    className={classes.menuButton}
                    onClick={() => { history.push('/todo') }}
                >
                    Todo
                </Button>
                <Button
                    color="inherit"
                    className={classes.menuButton}
                    onClick={() => { history.push('/about') }}
                >
                    About
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default TodoHeader
