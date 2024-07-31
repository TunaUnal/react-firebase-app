import React, { useState } from 'react'
import { deleteTodo, updateTodo } from '../firebase'


function TodoItem({ todo }) {
    const [editMode, setEditMode] = useState(false)
    const [newTodo, setNewTodo] = useState(todo.todo)
    const submitHandle = async () => {
        await updateTodo(newTodo, todo.id).then(()=>{
            setEditMode(false)
        })
    }
    if (editMode) {
        return (
            <li className="list-group-item d-flex justify-content-between" style={{ background: "rgba(0,0,0,0.1)" }} >
                <div className="input-group">
                    <input type="text" className="form-control" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                    <button className="btn btn-primary" type="button" onClick={submitHandle}>Güncelle</button>
                    <button className="btn btn-danger" type="submit" onClick={() => setEditMode(false)} >İptal Et</button>
                </div>

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