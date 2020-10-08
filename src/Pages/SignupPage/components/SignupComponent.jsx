//! BUILT IN
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//! CUSTOM
import Wallpaper from '../../../Global/components/Wallpaper'
import { signupUserThunk } from '../../../Store/middleware/authThunk'
import '../../../Assets/signup.css'
import { Link } from 'react-router-dom'
import GoHome from '../../../Global/components/GoHome'

const SignupComponent = ({ history, randomEmoji }) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('') 
        const [passwordConfirmation, setPasswordConfirmation] = useState('') 
        const refEmail = useRef(null)
        const refPassword= useRef(null)
        const refPasswordConfirm = useRef(null)

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
                        refEmail.current.style.border = "1px solid #ff4848"
                        refEmail.current.classList.add('animate__animated', 'animate__headShake')
                        refPassword.current.style.border = "1px solid #ff4848"
                        refPassword.current.classList.add('animate__animated', 'animate__headShake')
                        refPasswordConfirm.current.style.border = "1px solid #ff4848"
                        refPasswordConfirm.current.classList.add('animate__animated', 'animate__headShake')
                        return (
                                <div className="error animate__animated animate__slideInDown animate__faster" style={{ textAlign: 'center', marginBottom: "10px", fontSize: "1.2rem"}}>
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
                <div className="signup_page">
                        <GoHome />
                        <Wallpaper />
                        {
                                user.loggedIn 
                                ?
                                (
                                        null
                                )
                                :
                                (
                                        <form onSubmit={handleSubmit}>
                                                <h1>Signup</h1>
                                                <div className="form_content">
                                                        { showErrorMessage() }
                                                        <div className="email field" ref={refEmail}>
                                                                <input 
                                                                        type="email" 
                                                                        name="email" 
                                                                        placeholder="Email"
                                                                        value={email}
                                                                        onChange={handleChange}
                                                                />
                                                        </div>
                                                        <div className="password field" ref={refPassword}>
                                                                <input 
                                                                        type="password"
                                                                        name="password"
                                                                        placeholder="Password"
                                                                        value={password}
                                                                        onChange={handleChange}
                                                                />
                                                        </div>
                                                        <div className="password_confirmation field" ref={refPasswordConfirm}>
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
                                                        <div className="have_account_already">
                                                                <p>Have an account already? <Link to='/login'>Login</Link></p>
                                                        </div>
                                                </div>
                                                <div className="form_footer">
                                                        <span aria-label="copyright emoji" role="img">©️</span> 2020 Gomojii
                                                </div>
                                        </form>
                                )
                        }
                </div>
        )
}

export default SignupComponent
