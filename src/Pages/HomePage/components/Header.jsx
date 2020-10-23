import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import '../../../Assets/header.css'
import Logout from '../../../Global/components/Logout'
import SearchForm from './SearchForm'

const Header = () => {
        const state = useSelector(state => ({
                loggedIn: state.authRed.loggedIn,
                results: state.emojisRed.results,
                userEmojis: state.authRed.userEmojis
        }))
        const history = useHistory()
        
        const handleOpenMenuDrawer = event => {
                const menuBtn = document.querySelector('.menu_btn')
                const menuDrawer = document.querySelector('.menu_drawer_wrapper')
                menuDrawer.classList.add(
                        'animate__animated',
                        'animate__fadeInRight'
                )
                menuBtn.style.display = 'none'
                menuDrawer.style.display = 'flex'
                setTimeout(() => {
                        menuDrawer.classList.remove(
                                'animate__fadeInRight'
                        )
                }, 1000);
        }

        return (
                <header 
                        className='mode_change'
                >
                        <SearchForm />
                        <ul>
                                <li className="results">
                                        {
                                                `(${state.results.length})`
                                        }
                                </li>
                                <li className="home" style={ history.location.pathname === '/' ? { borderBottom: '3px solid #333', borderRadius: '0 0 5px 5px' } : null }>
                                        <NavLink to='/'>
                                                <span role='img' aria-label='home'>🏠</span>
                                        </NavLink>
                                </li>
                                {
                                        state.loggedIn 
                                        ?
                                        <>
                                                <li className="favs">
                                                        <span role='img' aria-label='fav'>❤️   </span>
                                                        <span className="saves_count"> { state.userEmojis.length }</span>
                                                </li>
                                                <li>
                                                        <Logout />
                                                </li>
                                                <li className="help">
                                                        <span role='img' aria-label='help'>
                                                                🤷🏽‍♂️
                                                        </span> 
                                                </li>
                                        </>
                                        :
                                        <>
                                                <li className="login">
                                                        <NavLink to="/login"><span role='img' aria-label="technologist" style={{ display: 'inline-block', marginRight: "5px" }}>🧑🏽‍💻</span>Login</NavLink>
                                                </li>
                                                <li className="signup">
                                                        <NavLink to="/signup"><span role='img' aria-label="hands up" style={{ display: 'inline-block', marginRight: "5px" }}>🙋</span>Signup</NavLink>
                                                </li>
                                                <li className="help">
                                                        <span role='img' aria-label='help'>
                                                                🤷🏽‍♂️
                                                        </span>
                                                </li>
                                        </>
                                }
                                <li className="menu_btn" onClick={handleOpenMenuDrawer}>
                                        <div className="line_1"></div>
                                        <div className="line_2"></div>
                                        <div className="line_3"></div>
                                </li>         
                        </ul>
                </header>
        )
}

export default Header
