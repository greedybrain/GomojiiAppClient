//! BUILT IN OR LIBRARY PACKAGE
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ifEmoji from 'if-emoji'
//! CUSTOM
import '../../../Assets/emojisContainer.css'
import Emoji from './Emoji'
import { saveEmojiThunk } from '../../../Store/middleware/authThunk'

const EmojisListComponent = () => {
        const dispatch = useDispatch()
        const state = useSelector(state => ({
                emojis: state.emojisRed.emojis,
                loading: state.emojisRed.loading,
                results: state.emojisRed.results
        }))
        const history = useHistory()

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
                const emojiId = event.target.dataset.id
                if (emojiId) {
                        dispatch(saveEmojiThunk(emojiId))
                } else {
                        return;
                }
        }       
        
        const renderEmojis = renderAccEmojis().map((emoji, index) => {
                const emojiVariants = emoji.attributes.variants
                if (emojiVariants && emojiVariants.length > 0) {
                        return (
                                <li 
                                        key={index} 
                                        style={{display: "flex"}} 
                                        className="emoji_wrapper"
                                        onDoubleClick={handleSaveEmoji}
                                >
                                        <div 
                                                className="parent_emoji"
                                        >
                                                <div 
                                                        className="emoji" 
                                                        onClick={handleCaretClick}
                                                >
                                                        <Emoji emoji={emoji} />
                                                </div>
                                                <div 
                                                        className="caret"
                                                >
                                                        <i 
                                                                className="fas fa-caret-right" 
                                                                onClick={handleCaretClick}></i>
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
                                                                onDoubleClick={handleSaveEmoji}
                                                        >
                                                                <Emoji emoji={emoji} />
                                                        </li>
                                                        {
                                                                emoji.attributes.variants.map((variant, index) => {
                                                                        return ifEmoji(variant.character) 
                                                                        ? 
                                                                        <li 
                                                                                className='variant' 
                                                                                key={ index } 
                                                                                onMouseOut={handleHideVariantsList}
                                                                                onDoubleClick={handleSaveEmoji}
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
                                onDoubleClick={handleSaveEmoji}
                        >
                                <Emoji emoji={emoji} />
                        </li> 
                        : 
                        null
                }
        })
        return (
                <>      
                        <ul className="emojis_container">
                                {
                                        state.loading && (
                                                <li style={{position: 'relative', left: '7.2em', top: '4.5em'}}>
                                                        <img src='images/mini-logo-black.png' alt="mini logo as loader" className="animate__animated animate__bounce animate__infinite" />
                                                </li>
                                        )
                                }
                                { renderEmojis }
                        </ul>
                </>
        )
}

export default EmojisListComponent
