import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutUserThunk } from '../../Store/middleware/authThunk'

const Logout = () => {
        const history = useHistory()
        const dispatch = useDispatch()

        const handleLogout = () => {
                dispatch(logoutUserThunk(history))
        }
        return <li className="logout_btn" onClick={handleLogout}><span role='img' aria-label='logout'>✌️</span></li>
}

export default Logout
