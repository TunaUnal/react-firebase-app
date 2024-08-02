import React, { useState } from 'react'
import { addTodo } from '../firebase';
import { useSelector } from 'react-redux';
export default function Todo() {
    const { user } = useSelector(state => state.user)
    const [todo, setTodo] = useState('')
    const TodoHandle = async (e) => {
        e.preventDefault();
        addTodo({
            todo: todo,
            uid: user.uid,
        })

                setTodo('')
        
    }
    return (
        <>

            <div className="row mt-3 justify-content-center">
                <div className="col-8">
                    <form onSubmit={TodoHandle}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Todo yaz..." />
                            <button disabled={!todo} className="btn btn-primary" type="submit">Ekle</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
