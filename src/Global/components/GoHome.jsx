import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const homeStyle = {
        display: "inline-block",
        position: "absolute",
        zIndex: "101",
        top: "20px",
        left: "30px",
        fontSize: "2.5rem"
}

const GoHome = () => {
        const refSpan = useRef(null)
        const handleHouseChangeOnMouseOver = () => {
                refSpan.current.innerHTML = '🏚️'
        }
        const handleHouseChangeOnMouseOut = () => {
                refSpan.current.innerHTML = '🏠'
        }
        return (
                <Link to='/'>
                        <span 
                                ref={refSpan} 
                                style={homeStyle} 
                                role='img' 
                                aria-label="house emoji" 
                                className="animate__animated animate__pulse animate__infinite"
                                onMouseEnter={handleHouseChangeOnMouseOver}
                                onMouseLeave={handleHouseChangeOnMouseOut}
                        >
                                🏠
                        </span>
                </Link>
        )
}

export default GoHome
