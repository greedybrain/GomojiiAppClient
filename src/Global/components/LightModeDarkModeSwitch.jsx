import React from 'react'
import { useState } from 'react'
import '../../Assets/lightDarkSwitch.css'

const LightModeDarkModeSwitch = () => {
        const [darkMode, setDarkMode] = useState(false)
        const [lightMode, setLightMode] = useState(false)

        const toggleLightDarkMode = event => {
                if (event.target.textContent === '🌚') {
                        document.body.style.backgroundColor = '#1b1b1b'
                        // document.body.style.color = '#1b1b1b'
                        setDarkMode(true)
                        setLightMode(false)
                } 
                if (event.target.textContent === '🌝') {
                        document.body.style.backgroundColor = '#fff'
                        // document.body.querySelectorAll = '#fff'
                        setLightMode(true)
                        setDarkMode(false)      
                } 
        }

        return (
                <li className='switch'onClick={toggleLightDarkMode}>
                        { 
                                darkMode 
                                ?
                                <span className="light" role='img' aria-label='light'>🌝</span>
                                :
                                <span className="dark" role='img' aria-label='dark'>🌚</span>
                        }
                </li>
        )
}

export default LightModeDarkModeSwitch
