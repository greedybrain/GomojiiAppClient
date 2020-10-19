import React from 'react'
import { useHistory } from 'react-router-dom'

const Logo = () => {
        const history = useHistory()
        return (
                history.location.pathname === '/'
                ?
                <div className="logo">
                        <img src="images/mini-logo-white.png" alt=""/>
                </div>
                :
                <div className="logo">
                        <img src="images/mini-logo-black.png" alt=""/>
                </div>
        )
}

export default Logo
