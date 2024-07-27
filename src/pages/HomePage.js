import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col  d-flex justify-content-center">
                        <Link to="/login" className='p-3 text-decoration-none text-white' >Giriş Yap</Link>
                        <Link to="/register" className='p-3 text-decoration-none text-white' >Kayıt Ol</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage