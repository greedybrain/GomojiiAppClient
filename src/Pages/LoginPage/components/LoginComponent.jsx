import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk } from '../../../Store/middleware/authThunk'

const LoginComponent = ({ history }) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const dispatch = useDispatch()
        const user = useSelector(state => ({
                error: state.authRed.error,
                loggedIn: state.authRed.loggedIn
        }))

        const handleChange = event => {
                if (event.target.name === 'email') {
                        setEmail(event.target.value)
                } else {
                        setPassword(event.target.value)
                }
        }

        const handleSubmit = event => {
                event.preventDefault()
                dispatch(loginUserThunk(email, password, history))
                setEmail('')
                setPassword('')
        }

        const showErrorMessage = () => {
                if (user.error) {
                        return (
                                <div className="error animate__animated animate__slideInDown animate__faster">
                                        <p style={{ color: 'red', fontWeight: 'bolder' }}>
                                                { user.error }
                                        </p>
                                </div>
                        )
                } else {
                        return null
                }
        }

        return (
                user.loggedIn 
                ?
                (
                        null
                )
                :
                (
                        <form onSubmit={handleSubmit}>
                                { showErrorMessage() }
                                <div className="email">
                                        <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email"
                                                value={email}
                                                onChange={handleChange}
                                        />
                                </div>
                                <div className="password">
                                        <input 
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={handleChange}
                                        />
                                </div>
                                <div className="submit_btn">
                                        <button>Login</button>
                                </div>
                        </form>
                )
                
        )
}

export default LoginComponent
