//! BUILT IN OR LIBRARY PACKAGE
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ifEmoji from 'if-emoji'
//! CUSTOM
import EmojiChildComponent from './EmojiChildComponent'
import '../../../Assets/emojisContainer.css'

const EmojisListComponent = () => {
        // const [showVariants, setShowVariants] = useState(false)
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
        
        const renderEmojis = renderAccEmojis().map((emoji, index) => {
                if (emoji.attributes.variants.length > 0) {
                        return (
                                <li key={index} style={{display: "flex"}} className="emoji">
                                        <div className="parent_emoji">
                                                <div className="emoji" onMouseEnter={null}><EmojiChildComponent emoji={ emoji } /> </div>
                                                <div className="caret">
                                                        <i className="fas fa-caret-right"></i>
                                                </div>
                                        </div>
                                        {/* {
                                                showVariants && (
                                                        <ul className="variants_container" onMouseLeave={setShowVariants(false)}>
                                                                <li>{<EmojiChildComponent emoji={emoji} />}</li>
                                                                {
                                                                        emoji.attributes.variants.map((variant, index) => {
                                                                                return ifEmoji(variant.character) ? <li key={ index }><EmojiChildComponent emoji={variant} /></li> : null
                                                                        })
                                                                }
                                                        </ul>
                                                )
                                        } */}
                                </li>
                        )
                } else {
                        return ifEmoji(emoji.attributes.character) ? <li key={index}>{emoji.attributes.character}</li> : null
                }
        })
        
        return (
                <>      
                        {/* <p>{renderEmojis.length} results</p> */}
                        {
                                state.loading && (
                                        <p>LOADING....</p>
                                )
                        }
                        <ul className="emojis_container">
                                { renderEmojis }
                        </ul>
                </>
        )
}

export default EmojisListComponent
