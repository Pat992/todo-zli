import React from 'react'
import { Link } from 'react-router-dom'

const TodoHeader: React.FC = () => {
    return (
        <React.Fragment>
            <h1>Todo Header</h1>
            <ul>
                <li><Link to='/todo'>Todo</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default TodoHeader
