import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signupUserThunk } from '../../../Store/middleware/authThunk'

const SignupComponent = ({ history }) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('') 
        const [passwordConfirmation, setPasswordConfirmation] = useState('') 

        const dispatch = useDispatch()

        const user = useSelector(state => ({
                error: state.authRed.error,
                loggedIn: state.authRed.loggedIn
        }))

        const handleChange = event => {
                if (event.target.name === 'email') {
                        setEmail(event.target.value)
                } else if(event.target.name === 'password') {
                        setPassword(event.target.value)
                } else {
                        setPasswordConfirmation(event.target.value)
                }
        }

        const handleSubmit = event => {
                event.preventDefault()
                dispatch(signupUserThunk(email, password, passwordConfirmation, history))
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
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
                                <div className="password_confirmation">
                                        <input 
                                                type="password"
                                                name="password_confirmation"
                                                placeholder="Confirm Password"
                                                value={passwordConfirmation}
                                                onChange={handleChange}
                                        />
                                </div>
                                <div className="submit_btn">
                                        <button>Signup</button>
                                </div>
                        </form>
                )
                
        )
}

export default SignupComponent
