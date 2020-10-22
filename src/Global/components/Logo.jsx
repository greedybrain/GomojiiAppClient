import React from 'react'
import { useHistory } from 'react-router-dom'
import miniLogoWhite from '../../Images/mini-logo-white.png'
import miniLogoBlack from '../../Images/mini-logo-black.png'

const Logo = () => {
        const history = useHistory()
        return (
                history.location.pathname === '/'
                ?
                <div className="logo">
                        <img src={miniLogoWhite} alt="white logo"/>
                </div>
                :
                <div className="logo">
                        <img src={miniLogoBlack} alt="black logo"/>
                </div>
        )
}

export default Logo
