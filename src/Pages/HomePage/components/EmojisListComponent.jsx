//! BUILT IN OR LIBRARY PACKAGE
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ifEmoji from 'if-emoji'
//! CUSTOM
import '../../../Assets/emojisContainer.css'
import Emoji from './Emoji'
import { useMediaQuery } from 'react-responsive'

const EmojisListComponent = () => {
        const state = useSelector(state => ({
                emojis: state.emojisRed.emojis,
                loading: state.emojisRed.loading,
                results: state.emojisRed.results
        }))
        const history = useHistory()
        const IS_AT_LEAST_799 = useMediaQuery({ maxWidth: 799 })

        const renderAccEmojis = () => {
                if (history.location.pathname === '/') {
                        return state.results
                }  else {
                        return state.emojis
                }
        }

        const handleCaretClick = event => {
                let isCaret = event.target.classList.contains('caret') || event.target.classList.contains('fas')
                let variantList = isCaret ? event.target.parentElement.parentElement.nextElementSibling : null
                if (isCaret) {
                        variantList.style.display = "block"
                } 
        }

        const handleHideVariantsList = event => {
                let isVariantCont = event.target.classList.contains('variants_container')
                if (isVariantCont) {
                        event.target.style.display = 'none'
                } else {
                        return null
                }
        }

        const handleSaveEmoji = event => {
                // event.target.classList.add(
                //         'animate__bounce'
                // )
                event.target.classList.toggle('animate__animated', 'animate_bounce')
        }
        
        const renderEmojis = renderAccEmojis().map((emoji, index) => {
                if (emoji.attributes.variants.length > 0) {
                        return (
                                <li 
                                        key={index} 
                                        style={{display: "flex"}} 
                                        className="emoji_wrapper"
                                        onClick={handleSaveEmoji}
                                >
                                        <div 
                                                className="parent_emoji"
                                        >
                                                <div 
                                                        className="emoji" 
                                                        onMouseEnter={handleCaretClick}
                                                >
                                                        <Emoji emoji={emoji} />
                                                </div>
                                                <div 
                                                        className="caret"
                                                >
                                                        <i 
                                                                className="fas fa-caret-right" 
                                                                onMouseEnter={handleCaretClick}></i>
                                                </div>
                                        </div>
                                        {
                                                <ul 
                                                        className="variants_container" 
                                                        style={{display: 'none'}} 
                                                        onMouseOut={handleHideVariantsList}>
                                                        <li 
                                                                className='variant' 
                                                                onMouseOut={handleHideVariantsList}
                                                                onClick={handleSaveEmoji}
                                                        >
                                                                {<Emoji emoji={emoji} />}
                                                        </li>
                                                        {
                                                                emoji.attributes.variants.map((variant, index) => {
                                                                        return ifEmoji(variant.character) 
                                                                        ? 
                                                                        <li 
                                                                                className='variant' 
                                                                                key={ index } 
                                                                                onMouseOut={handleHideVariantsList}
                                                                                onClick={handleSaveEmoji}
                                                                        >
                                                                                <Emoji emoji={variant} />
                                                                        </li> 
                                                                        : 
                                                                        null
                                                                })
                                                        }
                                                </ul>
                                        }
                                </li>
                        )
                } else {
                        return ifEmoji(emoji.attributes.character) 
                        ? 
                        <li 
                                key={index}
                                data-emoji-id={emoji.id}
                                onClick={handleSaveEmoji}
                        >
                                <Emoji emoji={emoji} />
                        </li> 
                        : 
                        null
                }
        })
        // <div className="save_emoji">
        //         <span role='img' aria-label="plus">➕</span>
        // </div>
        return (
                <>      
                        {/* <p>{renderEmojis.length} results</p> */}
                        <ul className="emojis_container">
                        {/* {
                                state.loading && (
                                        <li style={{position: 'relative', left: '7.2em', top: '4.5em'}}>
                                                <img src="images/mini-logo-black.png" alt="mini logo as loader" className="animate__animated animate__bounce animate__infinite" />
                                        </li>
                                )
                        } */}
                                { renderEmojis }
                        </ul>
                </>
        )
}

export default EmojisListComponent
