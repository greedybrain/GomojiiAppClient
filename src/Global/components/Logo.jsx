import React from 'react'
import { useHistory } from 'react-router-dom'

const Logo = () => {
        const history = useHistory()
        return (
                history.location.pathname === '/'
                ?
                <div className="logo">
                        <img src={require("images/mini-logo-white.png")} alt="white logo"/>
                </div>
                :
                <div className="logo">
                        <img src={require("images/mini-logo-black.png")} alt="black logo"/>
                </div>
        )
}

export default Logo
