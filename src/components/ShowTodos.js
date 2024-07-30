import React from 'react'
import { useSelector } from 'react-redux'
function ShowTodos() {
    const { todos } = useSelector(state => state.todos)
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <ul className="list-group">
                        {todos.map(todo => (
                            <li className="list-group-item" key={todo.id}>{todo.todo}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ShowTodos