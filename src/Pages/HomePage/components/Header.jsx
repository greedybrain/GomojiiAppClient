import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import '../../../Assets/header.css'
import Logout from '../../../Global/components/Logout'
import SearchForm from './SearchForm'

const Header = () => {
        const state = useSelector(state => ({
                loggedIn: state.authRed.loggedIn,
                results: state.emojisRed.results
        }))
        const history = useHistory()
        const IS_1330_ABOVE = useMediaQuery({minWidth: 1330})
        const IS_BETWEEN_1200_1329 = useMediaQuery({ minWidth: 1200, maxWidth: 1329 })
        const IS_BETWEEN_1000_1199 = useMediaQuery({ minWidth: 1000, maxWidth: 1199 })
        const IS_BETWEEN_800_999 = useMediaQuery({ minWidth: 800, maxWidth: 999 })
        const IS_AT_LEAST_799 = useMediaQuery({ maxWidth: 799 })

        return (
                <header 
                        className='mode_change' 
                        style={IS_AT_LEAST_799 ? { padding: '0 15px', height: '8vh' } : null}
                >
                        <SearchForm isAtLeast799={IS_AT_LEAST_799} />
                        <ul>
                                {
                                        IS_1330_ABOVE && (
                                                <>
                                                        <li className="results">
                                                                {
                                                                        state.results.length === 1 
                                                                        ? `${state.results.length} Result`
                                                                        : `${state.results.length} Results`
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
                                                                                <span role='img' aria-label='fav'>❤️</span>
                                                                        </li>
                                                                        <Logout />
                                                                </>
                                                                :
                                                                <>
                                                                        <li className="login">
                                                                                <NavLink to="/login">Login</NavLink>
                                                                        </li>
                                                                        <li className="signup">
                                                                                <NavLink to="/signup">Signup</NavLink>
                                                                        </li>
                                                                </>
                                                        }
                                                        <li className="help">
                                                                <span role='img' aria-label='help'>
                                                                        🤷🏽‍♂️
                                                                </span>
                                                        </li>
                                                </>
                                        )
                                }
                                {
                                        //! SCREENS LOWER THAN 1330
                                        IS_BETWEEN_1200_1329 && (
                                                <>
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
                                                                                <span role='img' aria-label='fav'>❤️</span>
                                                                        </li>
                                                                        <Logout />
                                                                </>
                                                                :
                                                                <>
                                                                        <li className="login">
                                                                                <NavLink to="/login">Login</NavLink>
                                                                        </li>
                                                                        <li className="signup">
                                                                                <NavLink to="/signup">Signup</NavLink>
                                                                        </li>
                                                                </>
                                                        }
                                                        <li className="help">
                                                                <span role='img' aria-label='help'>
                                                                        🤷🏽‍♂️
                                                                </span>
                                                        </li>
                                                        <li className="menu_btn">
                                                                <div className="line_1"></div>
                                                                <div className="line_2"></div>
                                                                <div className="line_3"></div>
                                                        </li>
                                                </>
                                        )
                                }
                                {
                                        IS_BETWEEN_1000_1199 && (
                                                <>
                                                       {
                                                                state.loggedIn && (
                                                                        <>
                                                                                <li className="favs">
                                                                                        <span role='img' aria-label='fav'>❤️</span>
                                                                                </li>
                                                                                <Logout />
                                                                        </>
                                                                )
                                                        }
                                                        <li className="help">
                                                                <span role='img' aria-label='help'>
                                                                        🤷🏽‍♂️
                                                                </span>
                                                        </li>
                                                        <li className="menu_btn">
                                                                <div className="line_1"></div>
                                                                <div className="line_2"></div>
                                                                <div className="line_3"></div>
                                                        </li> 
                                                </>
                                        )
                                }
                                {
                                        IS_BETWEEN_800_999 && (
                                                <>
                                                        {
                                                                state.loggedIn && (
                                                                        <>
                                                                                <Logout />
                                                                        </>
                                                                )
                                                        }
                                                        <li className="help">
                                                                <span role='img' aria-label='help'>
                                                                        🤷🏽‍♂️
                                                                </span>
                                                        </li>
                                                        <li className="menu_btn">
                                                                <div className="line_1"></div>
                                                                <div className="line_2"></div>
                                                                <div className="line_3"></div>
                                                        </li> 
                                                </>
                                        )
                                }
                                {
                                        IS_AT_LEAST_799 && (
                                                <li className="menu_btn">
                                                        <div className="line_1"></div>
                                                        <div className="line_2"></div>
                                                        <div className="line_3"></div>
                                                </li> 
                                        )
                                }
                        </ul>
                </header>
        )
}

export default Header
