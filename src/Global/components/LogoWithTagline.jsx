import React from 'react'
import wholeLogoWhite from '../../Images/gomojii-logo-white.png'

const LogoWithTagline = () => {
        return (
                <div className="image">
                        <img src={wholeLogoWhite} alt="gomojii logo"/>
                        <p className="tagline">EVERYTHING EMOJI!</p>
                </div>
        )
}

export default LogoWithTagline
