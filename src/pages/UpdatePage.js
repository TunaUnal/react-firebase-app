import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { update } from '../firebase'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'
function UpdatePage() {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)
    const [displayName, setDisplayName] = useState()
    const [avatar, setAvatar] = useState()
    const [loader, setLoader] = useState(user ? false : true)
    useEffect(() => {
        if(user){
            setDisplayName(user.displayName || '')
            setAvatar(user.photoURL ?? '')
            setLoader(false)
        }
    }, [user])


    const SubmitHandle = async e => {
        e.preventDefault()
        const result = await update({ displayName: displayName, photoURL: avatar })
        if (result) {
            navigate("/",{replace:true})
        }
    }

    if (loader) {
        return <Loader/>
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <form className='col-6' onSubmit={SubmitHandle}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Kullanıcı Adı</label>
                            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Profil Fotoğrafı</label>
                            <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UpdatePage