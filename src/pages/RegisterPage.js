import React, { useState } from 'react'
import { createUser } from '../firebase'
function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submitHandle = async (e) => {
        e.preventDefault()
        await createUser(username,password)
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Kayıt Ol formu</h2>
                        <form onSubmit={(e) => submitHandle(e)} >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage