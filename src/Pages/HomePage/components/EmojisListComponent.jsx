import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { emojiData } from '../../../Data/emojis'
import { addLoadedEmojis, loadEmojisRequest } from '../../../Store/emojis'
import ifEmoji from 'if-emoji'
import EmojiChildComponent from './EmojiChildComponent'

const EmojisListComponent = () => {
        
        const renderEmojis = emojiData.map((emoji, index) => {
                if (!!emoji.variants) {
                        return (
                                <li key={index} style={{display: "flex"}}>
                                        <div><EmojiChildComponent emoji={ emoji } /></div>
                                        <ul>
                                                {
                                                        emoji.variants.map((variant, index) => {
                                                                return ifEmoji(variant.character) ? <li key={ index }><EmojiChildComponent emoji={variant} /></li> : null
                                                        })
                                                }
                                        </ul>
                                </li>
                        )
                } else {
                        return ifEmoji(emoji.character) ? <li key={index}>{emoji.character}</li> : null
                }
        })
        return (
                <ul>
                        { renderEmojis }
                </ul>
        )
}

export default EmojisListComponent
