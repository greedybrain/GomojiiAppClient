import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutUserThunk } from '../../Store/middleware/authThunk'

const Logout = () => {
        const history = useHistory()
        const dispatch = useDispatch()

        const handleLogout = () => {
                dispatch(logoutUserThunk(history))
        }
        return <span className="logout_btn" onClick={handleLogout} role='img' aria-label='logout'>✌️</span>
}

export default Logout
