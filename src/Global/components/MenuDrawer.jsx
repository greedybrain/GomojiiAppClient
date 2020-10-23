import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../../Assets/menuDrawer.css'
import Logout from './Logout'

const MenuDrawer = () => {
        const state = useSelector(state => ({
                userEmojis: state.authRed.userEmojis,
                loggedIn: state.authRed.loggedIn
        }))
        const refMenuDrawer = useRef(null)

        const handleCloseDrawer = () => {
                const menuBtn = document.querySelector('.menu_btn')
                refMenuDrawer.current.classList.add(
                        'animate__animated',
                        'animate__fadeOutRight'
                )
                setTimeout(() => {
                        refMenuDrawer.current.style.display = 'none'
                        refMenuDrawer.current.classList.remove(
                                'animate__fadeOutRight'
                        )
                        menuBtn.style.display = 'flex'
                }, 700)
        }

        return (
                <div className="menu_drawer_wrapper" ref={refMenuDrawer}>
                        <div className="left_overlay"></div>
                        <ul className="menu_drawer">
                                <li className="close_btn">
                                        <span onClick={handleCloseDrawer} role="img" aria-label='close'>🚪</span>
                                </li>
                                <li className='menu_drawer_item_home'>
                                        <NavLink to='/'>
                                                <span role='img' aria-label='home'>🏠</span>
                                                <span className="menu_drawer_item_name">Home</span>     
                                        </NavLink>
                                </li>
                                {
                                        state.loggedIn 
                                        ? 
                                        <>
                                                <li className="menu_drawer_favs">
                                                        <span role='img' aria-label='fav'>❤️ { state.userEmojis.length }</span>
                                                </li>
                                                <li>
                                                        <Logout />
                                                </li>
                                        </>
                                        :
                                        <>
                                                <li className="menu_drawer_login">
                                                        <NavLink to="/login">
                                                                <span role='img' aria-label="technologist">🧑🏽‍💻</span>
                                                                <span className="menu_drawer_item_name">Login</span>    
                                                        </NavLink>
                                                </li>
                                                <li className="menu_drawer_signup">
                                                        <NavLink to="/signup">
                                                                <span role='img' aria-label="hands up">🙋</span>
                                                                <span className="menu_drawer_item_name">Signup</span>    
                                                        </NavLink>
                                                </li>
                                        </>
                                }
                                <li className="menu_drawer_signup">
                                        <NavLink to="/signup">
                                                <span role='img' aria-label="hands up">🤷🏽‍♀️</span>
                                                <span className="menu_drawer_item_name">Help ?</span>    
                                        </NavLink>
                                </li>
                        </ul>
                </div>
        )
}

export default MenuDrawer
