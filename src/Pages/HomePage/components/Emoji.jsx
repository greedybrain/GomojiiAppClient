import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useSelector } from 'react-redux'

const Emoji = ({ emoji }) => {
        const userData = useSelector(state => state.authRed.user)
        const handleCopyEmoji = ()  => userData.user.id ? alert('Emoji saved and copied') : alert('Emoji copied (Login or Signup to save one')
        return (
                <li title={emoji.attributes.slug}>
                        <CopyToClipboard text={ emoji.attributes ? emoji.attributes.character : emoji.character }>
                                <span onDoubleClick={handleCopyEmoji} data-id={emoji.id} style={{ display: "inline-block" }}>
                                        { emoji.attributes ? emoji.attributes.character : emoji.character }
                                </span>
                        </CopyToClipboard>
                </li>
        )
}

export default Emoji