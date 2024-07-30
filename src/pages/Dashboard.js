import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../firebase'
import Todo from '../components/Todo'
import ShowTodos from '../components/ShowTodos'
export default function Dashboard() {
    const { user } = useSelector(state => state.user)

    const logoutHandle = () => {
        logout()
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <img src={user.photoURL} alt="" width={40} height={40} style={{borderRadius:"50%"}} />
                    <h3 className='mx-3 mb-0 align-items-center' >Hoşgeldin {user.displayName || user.email}</h3>
                    <button className='btn m-2 btn-sm btn-danger' onClick={logoutHandle} >Çıkış Yap</button>
                    <Link to="/update" className='btn m-2 btn-sm btn-warning' >Oturumu Düzenle</Link>
                </div>
                <div className="col-12">

                </div>
            </div>

            <Todo />

            <ShowTodos/>
        </div >
    )
}
