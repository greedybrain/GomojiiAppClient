//!BUILT IN
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//! CUSTOM
import Wallpaper from '../../../Global/components/Wallpaper'
import { loginUserThunk } from '../../../Store/middleware/authThunk'
import '../../../Assets/login.css'
import GoHome from '../../../Global/components/GoHome'

const LoginComponent = ({ history }) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const refEmail = useRef(null)
        const refPassword = useRef(null)

        const dispatch = useDispatch()
        const user = useSelector(state => ({
                error: state.authRed.error,
                loggedIn: state.authRed.loggedIn
        }))

        const randomizeEmojiForLogin = () => {
                let emojiArr = ['☺️', '🤠', '💩', '🤖', '👻', '🤯', '😈', '🤡', '🙀', '🤩']
                return emojiArr[Math.floor(Math.random() * emojiArr.length)]
        }
        const randomEmoji = randomizeEmojiForLogin()

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
                        refEmail.current.style.border = "1px solid #ff4848"
                        refEmail.current.classList.add('animate__animated', 'animate__headShake')
                        refPassword.current.style.border = "1px solid #ff4848"
                        refPassword.current.classList.add('animate__animated', 'animate__headShake')
                        return (
                                <div className="error animate__animated animate__slideInDown animate__faster" style={{ textAlign: 'center', marginBottom: "10px", display: "1.2rem"}}>
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
                <div className="login_page">
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
                                                <h1>L<span style={{ display: 'inline-block' }} className="animate__animated animate__bounce animate__infinite">{randomEmoji}</span>gin</h1>
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
                                                        <div className="submit_btn">
                                                                <button>Login</button>
                                                        </div>
                                                        <div className="dont_have_an_account">
                                                                <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
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

export default LoginComponent
