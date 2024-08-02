import React, { useState } from 'react'
import { login } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function RegisterPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('ariftunaunal@gmail.com')
    const [password, setPassword] = useState('123321')
    const {user} = useSelector(state => state.user)
    if (user) { navigate("/", { replace: true }) }
    const submitHandle = async (e) => {
        e.preventDefault()
        await login(username, password).then(()=>{
            navigate("/", { replace: true })
        })
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Giriş Yap</h2>
                        <form onSubmit={(e) => submitHandle(e)} >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={username} onChange={e => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <p className="small">Hesabınız yok mu? <a href="/register">Hesap oluşturun</a></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Giriş Yap</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage