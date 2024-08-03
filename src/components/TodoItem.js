import React, { useState } from 'react'
import { deleteTodo, updateTodo } from '../firebase'


function TodoItem({ todo }) {
    const [editMode, setEditMode] = useState(false)
    const [newTodo, setNewTodo] = useState(todo.todo)
    const submitHandle = async (e) => {
        e.preventDefault()
        await updateTodo(newTodo, todo.id).then(() => {
            setEditMode(false)
        })
    }
    if (editMode) {
        return (
            <li className="list-group-item" style={{ background: "rgba(0,0,0,0.1)" }} >

                <form onSubmit={submitHandle}  className='input-group w-100' >
                    <input type="text" className="form-control" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                    <button className="btn btn-primary" type="submit">Güncelle</button>
                    <button className="btn btn-danger" type="button" onClick={() => setEditMode(false)} >İptal Et</button>
                </form>

            </li>
        )
    }
    return (

        <li className="list-group-item d-flex justify-content-between" >
            {todo.todo}
            <span>
                <i onClick={() => setEditMode(true)} className="bi bi-pen px-1"></i>
                <i onClick={() => deleteTodo(todo.id)} className="bi bi-trash3-fill px-1"></i>
            </span>
        </li>

    )
}

export default TodoItem