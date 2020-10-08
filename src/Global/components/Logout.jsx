import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutUserThunk } from '../../Store/middleware/authThunk'

const Logout = () => {
        const history = useHistory()
        const dispatch = useDispatch()
        const user = useSelector(state => ({
                loggedIn: state.authRed.loggedIn
              }))

        const handleLogout = () => {
                dispatch(logoutUserThunk(history))
        }
        return <li className="logout_btn" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i></li>
}

export default Logout
