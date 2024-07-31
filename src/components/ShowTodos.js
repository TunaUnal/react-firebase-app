import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function ShowTodos() {
    const { todos } = useSelector(state => state.todos)
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <ul className="list-group">
                        {todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ShowTodos