import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Dashboard from './Dashboard'
function HomePage() {
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login', { replace: true })
        }
    }, [user])
    return (
        <>

            {user && <Dashboard />}
        </>
    )
}

export default HomePage