import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import '../../../Assets/header.css'
import Logout from '../../../Global/components/Logout'
import SearchForm from './SearchForm'

const Header = () => {

        const user = useSelector(state => ({
                loggedIn: state.authRed.loggedIn
        }))

        return (
                <header>
                        <SearchForm />
                        <ul>
                                {
                                        user.loggedIn 
                                        ?
                                        <>
                                                <li className="favs">
                                                        <i className="fas fa-heart"></i>
                                                </li>
                                                <Logout />
                                        </>
                                        :
                                        <>
                                                <li className="login">
                                                        Login
                                                </li>
                                                <li className="signup">
                                                        Signup
                                                </li>
                                        </>
                                }
                                
                        </ul>
                </header>
        )
}

export default Header
