import React, { useState } from 'react'
import { createUser } from '../firebase'
import { useNavigate } from 'react-router-dom'
function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const submitHandle = async (e) => {
        e.preventDefault()
        
        await createUser(username,password).then(()=>{
            setTimeout(() => {
                navigate('/',{replace:true})
            }, 500);
        })
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Kayıt Ol Formu</h2>
                        <form onSubmit={(e) => submitHandle(e)} >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">E-Posta adresi</label>
                                <input type="email" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Parola</label>
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <p className="small">Zaten kayıtlı mısınız? <a href="/login">Oturum açın.</a></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Hesap Oluştur</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage