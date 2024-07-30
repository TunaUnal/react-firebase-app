import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Dashboard from './Dashboard'
function HomePage() {
    const { user } = useSelector(state => state.user)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col  d-flex justify-content-center">
                        {!user && (<>
                            <Link to="/login" className='p-3 text-decoration-none text-white' >Giriş Yap</Link>
                            <Link to="/register" className='p-3 text-decoration-none text-white' >Kayıt Ol</Link>
                        </>)}
                        {user && <Dashboard/> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage