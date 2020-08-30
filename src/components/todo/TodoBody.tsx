import React from 'react'
import { Card } from '@material-ui/core'
import TodoContent from './TodoContent'

const TodoBody: React.FC = () => {
    return (
        <Card>
            <TodoContent />
        </Card>
    )
}

export default TodoBody
