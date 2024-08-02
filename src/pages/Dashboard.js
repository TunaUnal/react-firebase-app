import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { EmailVerification, logout } from '../firebase'
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
                    <img src={user.photoURL ?? "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="" width={40} height={40} style={{ borderRadius: "50%" }} />
                    <h3 className='mx-3 mb-0 align-items-center' >Hoşgeldin {user.displayName || user.email}</h3>
                    <button className='btn m-2 btn-sm btn-danger' onClick={logoutHandle} >Çıkış Yap</button>
                    <Link to="/update" className='btn m-2 btn-sm btn-warning' >Profili Düzenle</Link>
                </div>
            </div>
            {!user.emailVerified && (
                <div className="row justify-content-center mt-3">
                    <div className="col-6">
                        <div className="alert alert-warning d-flex justify-content-between">
                            <span>E-Posta adresinizi doğrulamanız gerekmektedir.</span>
                            <p className='text-warning mb-0 text-decoration-underline' style={{cursor:"pointer"}} onClick={EmailVerification}>Doğrulama maili gönder.</p>
                        </div>
                    </div>
                </div>
            )}
            {user.emailVerified && (
                <>
                    <Todo />
                    <ShowTodos />

                </>
            )}

        </div >
    )
}
