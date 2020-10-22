import React from 'react'

const LogoWithTagline = () => {
        return (
                <div className="image">
                        <img src={`${process.env.PUBLIC_URL}/images/gomojii-logo-white.png`} alt="gomojii logo"/>
                        <p className="tagline">EVERYTHING EMOJI!</p>
                </div>
        )
}

export default LogoWithTagline
